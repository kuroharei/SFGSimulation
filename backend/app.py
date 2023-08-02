from flask import Flask, jsonify, request, Response, redirect, render_template, url_for
from markupsafe import Markup
from model import *
import base64
from io import BytesIO
from matplotlib.figure import Figure
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

ma = Marshmallow(app)

@app.route('/get', methods = ['GET'])
def get_graph():
    return jsonify({"Hello": "World"})

@app.route("/calculation", methods=["POST"])
def calculation():
    # theta_distribution = request.form.get('distribution')
    symmetry = request.form.get('symmetry')
    FWHM = float(request.form.get('FWHM'))
    w = [FWHM / 180 * np.pi]
    theta_distribution = 'delta' if FWHM == 0 else 'gaussian'
    lamda = [float(request.form.get('lamdavis')), float(request.form.get('lamdair'))]
    betavis = request.form.get('betavis')
    betair = request.form.get('betair')
    beta = list(map(lambda deg : np.pi * float(deg) / 180, [betavis, betair]))
    n1 = [float(request.form.get('n1sfg')), float(request.form.get('n1vis')), float(request.form.get('n1ir'))]
    n2 = [float(request.form.get('n2sfg')), float(request.form.get('n2vis')), float(request.form.get('n2ir'))]

    if symmetry == "C3v":
        R = float(request.form.get('R'))
        sample = C3v(lamda=lamda, beta=beta, n1=n1, n2=n2, R=R, theta_distribution=[theta_distribution])
        theta = np.linspace(0, 90, 180)

        chi = sample.chi(np.array([w]), np.array([0]), np.array([np.pi]), np.array([2000]), np.array([1]), np.array([np.pi * theta / 180]))

        fig = Figure(figsize=(10, 30), layout='constrained')
        ax = fig.subplots(4, 1)

        ax[0].plot(theta, np.abs(chi["sspss"]) ** 2, c='r', label=r'$ssp$')
        ax[0].plot(theta, np.abs(chi["spsss"]) ** 2, c='b', label=r'$sps$')
        ax[0].plot(theta, np.abs(chi["pssss"]) ** 2, c='y', label=r'$pss$')
        ax[0].plot(theta, np.abs(chi["pppss"]) ** 2, c='k', label=r'$ppp$')
        ax[0].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[0].set_ylabel(r"$d^2R(\theta)\ for\ ss-C_{3v}(\beta_{ccc}^2)$")
        ax[0].legend()

        ax[1].plot(theta, np.abs(chi["sspas"]) ** 2, c='r', label=r'$ssp$')
        ax[1].plot(theta, np.abs(chi["spsas"]) ** 2, c='b', label=r'$sps$')
        ax[1].plot(theta, np.abs(chi["pssas"]) ** 2, c='y', label=r'$pss$')
        ax[1].plot(theta, np.abs(chi["pppas"]) ** 2, c='k', label=r'$ppp$')
        ax[1].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[1].set_ylabel(r"$d^2R(\theta)\ for\ as-C_{3v}(\beta_{aca}^2)$")
        ax[1].legend()

        ax[2].plot(theta, chi["sspss"], c='r', label=r'$ssp$')
        ax[2].plot(theta, chi["spsss"], c='b', label=r'$sps$')
        ax[2].plot(theta, chi["pssss"], c='y', label=r'$pss$')
        ax[2].plot(theta, chi["pppss"], c='k', label=r'$ppp$')
        ax[2].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[2].set_ylabel(r"$d\times r(\theta)\ for\ ss-C_{3v}(\beta_{ccc})$")
        ax[2].legend()

        ax[3].plot(theta, chi["sspas"], c='r', label=r'$ssp$')
        ax[3].plot(theta, chi["spsas"], c='b', label=r'$sps$')
        ax[3].plot(theta, chi["pssas"], c='y', label=r'$pss$')
        ax[3].plot(theta, chi["pppas"], c='k', label=r'$ppp$')
        ax[3].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[3].set_ylabel(r"$d\times r(\theta)\ for\ as-C_{3v}(\beta_{aca})$")
        ax[3].legend()
        
        fig.tight_layout()
        buf = BytesIO()
        fig.savefig(buf, format="png")
        graph = base64.b64encode(buf.getbuffer()).decode("ascii")
        param = {"ss" : {"ssp" : {"d" : sample.sspssd, "c" : sample.sspssc},
                         "sps" : {"d" : sample.spsssd, "c" : sample.spsssc},
                         "pss" : {"d" : sample.pssssd, "c" : sample.pssssc},
                         "ppp" : {"d" : sample.pppssd, "c" : sample.pppssc}},
                 "as" : {"ssp" : {"d" : sample.sspasd, "c" : sample.sspasc},
                         "sps" : {"d" : sample.spsasd, "c" : sample.spsasc},
                         "pss" : {"d" : sample.pssasd, "c" : sample.pssasc},
                         "ppp" : {"d" : sample.pppasd, "c" : sample.pppasc}}}
        return render_template("simulation.html", symmetry=symmetry,
                                                  FWHM=FWHM,
                                                  lamdavis=lamda[0],
                                                  lamdair=lamda[1],
                                                  betavis=betavis,
                                                  betair=betair,
                                                  n1sfg=n1[0],
                                                  n1vis=n1[1],
                                                  n1ir=n1[2],
                                                  n2sfg=n2[0],
                                                  n2vis=n2[1],
                                                  n2ir=n2[2],
                                                  R=R,
                                                  graph=graph,
                                                  param=param)

    if symmetry == "C2v":
        r = float(request.form.get('rC2v'))
        tau = float(request.form.get('tau'))
        sample = C2v(lamda=lamda, beta=beta, n1=n1, n2=n2, r=r, tau=tau, theta_distribution=[theta_distribution])
        theta = np.linspace(0, 90, 180)

        chi = sample.chi(np.array([w]), np.array([0]), np.array([np.pi]), np.array([2000]), np.array([1]), np.array([np.pi * theta / 180]))

        fig = Figure(figsize=(10, 30), layout='constrained')
        ax = fig.subplots(4, 1)

        ax[0].plot(theta, np.abs(chi["sspss"]) ** 2, c='r', label=r'$ssp$')
        ax[0].plot(theta, np.abs(chi["spsss"]) ** 2, c='b', label=r'$sps$')
        ax[0].plot(theta, np.abs(chi["pssss"]) ** 2, c='y', label=r'$pss$')
        ax[0].plot(theta, np.abs(chi["pppss"]) ** 2, c='k', label=r'$ppp$')
        ax[0].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[0].set_ylabel(r"$d^2R(\theta)\ for\ ss-C_{2v}(\beta_{ccc}^2)$")
        ax[0].legend()

        ax[1].plot(theta, np.abs(chi["sspas"]) ** 2, c='r', label=r'$ssp$')
        ax[1].plot(theta, np.abs(chi["spsas"]) ** 2, c='b', label=r'$sps$')
        ax[1].plot(theta, np.abs(chi["pssas"]) ** 2, c='y', label=r'$pss$')
        ax[1].plot(theta, np.abs(chi["pppas"]) ** 2, c='k', label=r'$ppp$')
        ax[1].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[1].set_ylabel(r"$d^2R(\theta)\ for\ as-C_{2v}(\beta_{aca}^2)$")
        ax[1].legend()

        ax[2].plot(theta, chi["sspss"], c='r', label=r'$ssp$')
        ax[2].plot(theta, chi["spsss"], c='b', label=r'$sps$')
        ax[2].plot(theta, chi["pssss"], c='y', label=r'$pss$')
        ax[2].plot(theta, chi["pppss"], c='k', label=r'$ppp$')
        ax[2].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[2].set_ylabel(r"$d\times r(\theta)\ for\ ss-C_{2v}(\beta_{ccc})$")
        ax[2].legend()

        ax[3].plot(theta, chi["sspas"], c='r', label=r'$ssp$')
        ax[3].plot(theta, chi["spsas"], c='b', label=r'$sps$')
        ax[3].plot(theta, chi["pssas"], c='y', label=r'$pss$')
        ax[3].plot(theta, chi["pppas"], c='k', label=r'$ppp$')
        ax[3].set_xlabel(r"$Orientational\ angle(\theta)\ ({}\ function\ distribution)\ {}$".format(theta_distribution, ("" if FWHM==0 else ("FWHM=" + str(FWHM) + "\degree"))))
        ax[3].set_ylabel(r"$d\times r(\theta)\ for\ as-C_{2v}(\beta_{aca})$")
        ax[3].legend()
        
        fig.tight_layout()
        buf = BytesIO()
        fig.savefig(buf, format="png")
        graph = base64.b64encode(buf.getbuffer()).decode("ascii")
        param = {"ss" : {"ssp" : {"d" : sample.sspssd, "c" : sample.sspssc},
                         "sps" : {"d" : sample.spsssd, "c" : sample.spsssc},
                         "pss" : {"d" : sample.pssssd, "c" : sample.pssssc},
                         "ppp" : {"d" : sample.pppssd, "c" : sample.pppssc}},
                 "as" : {"ssp" : {"d" : sample.sspasd, "c" : sample.sspasc},
                         "sps" : {"d" : sample.spsasd, "c" : sample.spsasc},
                         "pss" : {"d" : sample.pssasd, "c" : sample.pssasc},
                         "ppp" : {"d" : sample.pppasd, "c" : sample.pppasc}}}
        return render_template("simulation.html", symmetry=symmetry,
                                                  FWHM=FWHM,
                                                  lamdavis=lamda[0],
                                                  lamdair=lamda[1],
                                                  betavis=betavis,
                                                  betair=betair,
                                                  n1sfg=n1[0],
                                                  n1vis=n1[1],
                                                  n1ir=n1[2],
                                                  n2sfg=n2[0],
                                                  n2vis=n2[1],
                                                  n2ir=n2[2],
                                                  rC2v=r,
                                                  tau=tau,
                                                  graph=graph,
                                                  param=param)
    
    if symmetry == "Cinfv":
        r = float(request.form.get('rCinfv'))
        sample = Cinfv(lamda=lamda, beta=beta, n1=n1, n2=n2, r=r, theta_distribution=[theta_distribution])
        theta = np.linspace(0, 90, 180)

        chi = sample.chi(np.array([w]), np.array([0]), np.array([np.pi]), np.array([2000]), np.array([1]), np.array([np.pi * theta / 180]))

        fig = Figure(figsize=(10, 15), layout='constrained')
        ax = fig.subplots(2, 1)

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
        param = {"ss" : {"ssp" : {"d" : sample.sspssd, "c" : sample.sspssc},
                         "sps" : {"d" : sample.spsssd, "c" : sample.spsssc},
                         "pss" : {"d" : sample.pssssd, "c" : sample.pssssc},
                         "ppp" : {"d" : sample.pppssd, "c" : sample.pppssc}}}
        return render_template("simulation.html", symmetry=symmetry,
                                                  FWHM=FWHM,
                                                  lamdavis=lamda[0],
                                                  lamdair=lamda[1],
                                                  betavis=betavis,
                                                  betair=betair,
                                                  n1sfg=n1[0],
                                                  n1vis=n1[1],
                                                  n1ir=n1[2],
                                                  n2sfg=n2[0],
                                                  n2vis=n2[1],
                                                  n2ir=n2[2],
                                                  rCinfv=r,
                                                  graph=graph,
                                                  param=param)


if __name__ == "__main__":
    app.run(debug=True)