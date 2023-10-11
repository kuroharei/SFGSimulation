from flask import Flask, jsonify, request, Response, redirect, render_template, url_for
from markupsafe import Markup
from model import *
import base64
from io import BytesIO
from matplotlib.figure import Figure
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import json


app = Flask(__name__)
CORS(app)

ma = Marshmallow(app)

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/get', methods = ['GET'])
def get_graph():
    return jsonify({"Hello": "World"})

@app.route("/calculation", methods=["POST"])
def calculation():
    # theta_distribution = request.form.get('distribution')
    symmetry = request.json['symmetry']
    FWHM = float(request.json['FWHM'])
    w = [FWHM / 180 * np.pi]
    theta_distribution = 'delta' if FWHM == 0 else 'gaussian'
    lamda = [float(request.json['lamdavis']), float(request.json['lamdair'])]
    betavis = request.json['betavis']
    betair = request.json['betair']
    beta = list(map(lambda deg : np.pi * float(deg) / 180, [betavis, betair]))
    n1 = [float(request.json['n1sfg']), float(request.json['n1vis']), float(request.json['n1ir'])]
    n2 = [float(request.json['n2sfg']), float(request.json['n2vis']), float(request.json['n2ir'])]

    if symmetry == "C3v":
        R = float(request.json['R'])
        sample = C3v(lamda=lamda, beta=beta, n1=n1, n2=n2, R=R, theta_distribution=[theta_distribution])
        theta = np.linspace(0, 90, 180)

        chi = sample.chi(np.array([w]), np.array([0]), np.array([np.pi]), np.array([2000]), np.array([1]), np.array([np.pi * theta / 180]))

        fig = Figure(figsize=(15, 10), layout='constrained')
        ax = fig.subplots(2, 2)

        ax[0][0].plot(theta, np.abs(chi["sspss"]) ** 2, c='r', label=r'$ssp$')
        ax[0][0].plot(theta, np.abs(chi["spsss"]) ** 2, c='b', label=r'$sps$')
        ax[0][0].plot(theta, np.abs(chi["pssss"]) ** 2, c='y', label=r'$pss$')
        ax[0][0].plot(theta, np.abs(chi["pppss"]) ** 2, c='k', label=r'$ppp$')
        ax[0][0].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[0][0].set_ylabel(r"$d^2R(\theta)\ for\ ss-C_{3v}(\beta_{ccc}^2)$")
        ax[0][0].legend()

        ax[0][1].plot(theta, np.abs(chi["sspas"]) ** 2, c='r', label=r'$ssp$')
        ax[0][1].plot(theta, np.abs(chi["spsas"]) ** 2, c='b', label=r'$sps$')
        ax[0][1].plot(theta, np.abs(chi["pssas"]) ** 2, c='y', label=r'$pss$')
        ax[0][1].plot(theta, np.abs(chi["pppas"]) ** 2, c='k', label=r'$ppp$')
        ax[0][1].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[0][1].set_ylabel(r"$d^2R(\theta)\ for\ as-C_{3v}(\beta_{aca}^2)$")
        ax[0][1].legend()

        ax[1][0].plot(theta, chi["sspss"], c='r', label=r'$ssp$')
        ax[1][0].plot(theta, chi["spsss"], c='b', label=r'$sps$')
        ax[1][0].plot(theta, chi["pssss"], c='y', label=r'$pss$')
        ax[1][0].plot(theta, chi["pppss"], c='k', label=r'$ppp$')
        ax[1][0].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[1][0].set_ylabel(r"$d\times r(\theta)\ for\ ss-C_{3v}(\beta_{ccc})$")
        ax[1][0].legend()

        ax[1][1].plot(theta, chi["sspas"], c='r', label=r'$ssp$')
        ax[1][1].plot(theta, chi["spsas"], c='b', label=r'$sps$')
        ax[1][1].plot(theta, chi["pssas"], c='y', label=r'$pss$')
        ax[1][1].plot(theta, chi["pppas"], c='k', label=r'$ppp$')
        ax[1][1].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[1][1].set_ylabel(r"$d\times r(\theta)\ for\ as-C_{3v}(\beta_{aca})$")
        ax[1][1].legend()
        
        fig.tight_layout()
        buf = BytesIO()
        fig.savefig(buf, format="png")
        graph = base64.b64encode(buf.getbuffer()).decode("ascii")
        param = {"ss" : {"ssp" : {"d" : float(sample.sspssd), "c" : float(sample.sspssc)},
                         "sps" : {"d" : float(sample.spsssd), "c" : float(sample.spsssc)},
                         "pss" : {"d" : float(sample.pssssd), "c" : float(sample.pssssc)},
                         "ppp" : {"d" : float(sample.pppssd), "c" : float(sample.pppssc)}},
                 "as" : {"ssp" : {"d" : float(sample.sspasd), "c" : float(sample.sspasc)},
                         "sps" : {"d" : float(sample.spsasd), "c" : float(sample.spsasc)},
                         "pss" : {"d" : float(sample.pssasd), "c" : float(sample.pssasc)},
                         "ppp" : {"d" : float(sample.pppasd), "c" : float(sample.pppasc)}}}
        return jsonify({"graph": graph,
                        "param": param})

    if symmetry == "C2v":
        r = float(request.json['rC2v'])
        tau = float(request.json['tau']) / 180 * np.pi
        sample = C2v(lamda=lamda, beta=beta, n1=n1, n2=n2, r=r, tau=tau, theta_distribution=[theta_distribution])
        theta = np.linspace(0, 90, 180)

        chi = sample.chi(np.array([w]), np.array([0]), np.array([np.pi]), np.array([2000]), np.array([1]), np.array([np.pi * theta / 180]))

        fig = Figure(figsize=(15, 10), layout='constrained')
        ax = fig.subplots(2, 2)

        ax[0][0].plot(theta, np.abs(chi["sspss"]) ** 2, c='r', label=r'$ssp$')
        ax[0][0].plot(theta, np.abs(chi["spsss"]) ** 2, c='b', label=r'$sps$')
        ax[0][0].plot(theta, np.abs(chi["pssss"]) ** 2, c='y', label=r'$pss$')
        ax[0][0].plot(theta, np.abs(chi["pppss"]) ** 2, c='k', label=r'$ppp$')
        ax[0][0].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[0][0].set_ylabel(r"$d^2R(\theta)\ for\ ss-C_{2v}(\beta_{ccc}^2)$")
        ax[0][0].legend()

        ax[0][1].plot(theta, np.abs(chi["sspas"]) ** 2, c='r', label=r'$ssp$')
        ax[0][1].plot(theta, np.abs(chi["spsas"]) ** 2, c='b', label=r'$sps$')
        ax[0][1].plot(theta, np.abs(chi["pssas"]) ** 2, c='y', label=r'$pss$')
        ax[0][1].plot(theta, np.abs(chi["pppas"]) ** 2, c='k', label=r'$ppp$')
        ax[0][1].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[0][1].set_ylabel(r"$d^2R(\theta)\ for\ as-C_{2v}(\beta_{aca}^2)$")
        ax[0][1].legend()

        ax[1][0].plot(theta, chi["sspss"], c='r', label=r'$ssp$')
        ax[1][0].plot(theta, chi["spsss"], c='b', label=r'$sps$')
        ax[1][0].plot(theta, chi["pssss"], c='y', label=r'$pss$')
        ax[1][0].plot(theta, chi["pppss"], c='k', label=r'$ppp$')
        ax[1][0].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[1][0].set_ylabel(r"$d\times r(\theta)\ for\ ss-C_{2v}(\beta_{ccc})$")
        ax[1][0].legend()

        ax[1][1].plot(theta, chi["sspas"], c='r', label=r'$ssp$')
        ax[1][1].plot(theta, chi["spsas"], c='b', label=r'$sps$')
        ax[1][1].plot(theta, chi["pssas"], c='y', label=r'$pss$')
        ax[1][1].plot(theta, chi["pppas"], c='k', label=r'$ppp$')
        ax[1][1].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[1][1].set_ylabel(r"$d\times r(\theta)\ for\ as-C_{2v}(\beta_{aca})$")
        ax[1][1].legend()
        
        fig.tight_layout()
        buf = BytesIO()
        fig.savefig(buf, format="png")
        graph = base64.b64encode(buf.getbuffer()).decode("ascii")
        param = {"ss" : {"ssp" : {"d" : float(sample.sspssd), "c" : float(sample.sspssc)},
                         "sps" : {"d" : float(sample.spsssd), "c" : float(sample.spsssc)},
                         "pss" : {"d" : float(sample.pssssd), "c" : float(sample.pssssc)},
                         "ppp" : {"d" : float(sample.pppssd), "c" : float(sample.pppssc)}},
                 "as" : {"ssp" : {"d" : float(sample.sspasd), "c" : float(sample.sspasc)},
                         "sps" : {"d" : float(sample.spsasd), "c" : float(sample.spsasc)},
                         "pss" : {"d" : float(sample.pssasd), "c" : float(sample.pssasc)},
                         "ppp" : {"d" : float(sample.pppasd), "c" : float(sample.pppasc)}}}
        return jsonify({"graph": graph,
                        "param": param})
    
    if symmetry == "Cinfv":
        r = float(request.json['rCinfv'])
        sample = Cinfv(lamda=lamda, beta=beta, n1=n1, n2=n2, r=r, theta_distribution=[theta_distribution])
        theta = np.linspace(0, 90, 180)

        chi = sample.chi(np.array([w]), np.array([0]), np.array([np.pi]), np.array([2000]), np.array([1]), np.array([np.pi * theta / 180]))

        fig = Figure(figsize=(15, 5), layout='constrained')
        ax = fig.subplots(1, 2)

        ax[0].plot(theta, np.abs(chi["sspss"]) ** 2, c='r', label=r'$ssp$')
        ax[0].plot(theta, np.abs(chi["spsss"]) ** 2, c='b', label=r'$sps$')
        ax[0].plot(theta, np.abs(chi["pssss"]) ** 2, c='y', label=r'$pss$')
        ax[0].plot(theta, np.abs(chi["pppss"]) ** 2, c='k', label=r'$ppp$')
        ax[0].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[0].set_ylabel(r"$d^2R(\theta)\ for\ ss-C_{\infty v}(\beta_{ccc}^2)$")
        ax[0].legend()

        ax[1].plot(theta, chi["sspss"], c='r', label=r'$ssp$')
        ax[1].plot(theta, chi["spsss"], c='b', label=r'$sps$')
        ax[1].plot(theta, chi["pssss"], c='y', label=r'$pss$')
        ax[1].plot(theta, chi["pppss"], c='k', label=r'$ppp$')
        ax[1].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[1].set_ylabel(r"$d\times r(\theta)\ for\ ss-C_{\infty v}(\beta_{ccc})$")
        ax[1].legend()
        
        fig.tight_layout()
        buf = BytesIO()
        fig.savefig(buf, format="png")
        graph = base64.b64encode(buf.getbuffer()).decode("ascii")
        param = {"ss" : {"ssp" : {"d" : float(sample.sspssd), "c" : float(sample.sspssc)},
                         "sps" : {"d" : float(sample.spsssd), "c" : float(sample.spsssc)},
                         "pss" : {"d" : float(sample.pssssd), "c" : float(sample.pssssc)},
                         "ppp" : {"d" : float(sample.pppssd), "c" : float(sample.pppssc)}}}
        return jsonify({"graph": graph,
                        "param": param})


if __name__ == "__main__":
    app.run(debug=True)