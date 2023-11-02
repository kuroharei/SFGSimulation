import numpy as np
import matplotlib.pyplot as plt

c = 3e8

distribution = {
    "delta": 0,
    "gaussian": lambda x, w, lower, upper, x0: np.exp(- ((x - x0) ** 2) / (2 * (w / (2 * np.sqrt(2 * np.log(2))) ** 2))),
    "lorentzian": lambda x, w, lower, upper, x0: w / (2 * ((x - x0) ** 2) + (2 * w) ** 2),
    "doubleGaussian": lambda x, w0, w1, lower, upper, x0, x1: np.exp(- ((x - x0) ** 2) / (2 * (w0 / (2 * np.sqrt(2 * np.log(2))) ** 2))) + np.exp(- ((x - x1) ** 2) / (2 * (w1 / (2 * np.sqrt(2 * np.log(2))) ** 2))),
    "uniform": lambda x, w, lower, upper, x0: np.exp(x0 * 0) / (upper - lower)
}


def Expection(func, Disfunc=[0], W=[0], Lower=[0], Upper=[0], N=[100], A=[1], X=[0]):
    return sum(map((lambda disfunc, w, lower, upper, n, a, x: a * func(x) if disfunc == 0 else
                    a * sum([func((upper - lower) / n * i) * disfunc((upper - lower) /
                            n * i, w, lower, upper, x) * (upper - lower) / n for i in range(n)])
                    / sum([disfunc((upper - lower) / n * i, w, lower, upper, x) * (upper - lower) / n for i in range(n)])),
                   Disfunc, W, Lower, Upper, N, A, X)) \
        / sum(A)


class SFG:
    def __init__(self, lamda, beta, n1, n2, theta_distribution=['delta'], psi_distribution=['uniform']) -> None:
        self.lamda = [1 / (1 / lamda[0] + 1 / lamda[1])] + lamda
        self.omega = list(
            map((lambda lamda: 2 * np.pi * c / lamda * 1e7), self.lamda))
        self.beta = [np.arcsin(self.lamda[0] * (np.sin(beta[0]) /
                               self.lamda[1] + np.sin(beta[1]) / self.lamda[2]))] + beta
        self.n1 = n1
        self.n2 = n2
        self.n_ = list(map(lambda n1, n2: np.sqrt(
            (n1 ** 2 + n2 ** 2 + 4) / (2 * (n1 ** -2 + n2 ** -2 + 1))), self.n1, self.n2))
        self.gamma = list(map(lambda beta, n1, n2: np.arcsin(
            np.sin(beta) * n1 / n2), self.beta, self.n1, self.n2))
        self.theta_distribution = np.array(
            list(map((lambda x: distribution[x]), theta_distribution)))
        self.psi_distribution = np.array(
            list(map((lambda x: distribution[x]), psi_distribution)))

    def Lxx(self, i):
        return 2 * self.n1[i] * np.cos(self.gamma[i]) / (self.n1[i] * np.cos(self.gamma[i]) + self.n2[i] * np.cos(self.beta[i]))

    def Lyy(self, i):
        return 2 * self.n1[i] * np.cos(self.beta[i]) / (self.n1[i] * np.cos(self.beta[i]) + self.n2[i] * np.cos(self.gamma[i]))

    def Lzz(self, i):
        return 2 * self.n2[i] * np.cos(self.beta[i]) / (self.n1[i] * np.cos(self.gamma[i]) + self.n2[i] * np.cos(self.beta[i])) * ((self.n1[i] / self.n_[i]) ** 2)

    # def xxzss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def yyzss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def xzxss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def zxxss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def yzyss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def zyyss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def zyyss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def zzzss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def xxzas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def yyzas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def xzxas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def zxxas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def yzyas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def zyyas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    # def zzzas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
    #     pass

    def sspssParam(self, squarecospsi, squaresinpsi):
        self.sspssd = self.Lyy(0) * self.Lyy(1) * self.Lzz(2) * np.sin(
            self.beta[2]) * self.yyzssParam(squarecospsi, squaresinpsi)[0]
        self.sspssc = self.yyzssParam(squarecospsi, squaresinpsi)[1]
        return np.array([self.sspssd, self.sspssc])

    def spsssParam(self, squarecospsi, squaresinpsi):
        self.spsssd = self.Lyy(0) * self.Lzz(1) * self.Lyy(2) * np.sin(
            self.beta[1]) * self.yzyssParam(squarecospsi, squaresinpsi)[0]
        self.spsssc = self.yzyssParam(squarecospsi, squaresinpsi)[1]
        return np.array([self.spsssd, self.spsssc])

    def pssssParam(self, squarecospsi, squaresinpsi):
        self.pssssd = self.Lzz(0) * self.Lyy(1) * self.Lyy(2) * np.sin(
            self.beta[0]) * self.zyyssParam(squarecospsi, squaresinpsi)[0]
        self.pssssc = self.zyyssParam(squarecospsi, squaresinpsi)[1]
        return np.array([self.pssssd, self.pssssc])

    def pppssParam(self, squarecospsi, squaresinpsi):
        a = np.array([-self.Lxx(0) * self.Lxx(1) * self.Lzz(2) * np.cos(self.beta[0]) * np.cos(self.beta[1]) * np.sin(self.beta[2]),
                      -self.Lxx(0) * self.Lzz(1) * self.Lxx(2) *
                      np.cos(self.beta[0]) * np.sin(self.beta[1]
                                                    ) * np.cos(self.beta[2]),
                      +self.Lzz(0) * self.Lxx(1) * self.Lxx(2) *
                      np.sin(self.beta[0]) * np.cos(self.beta[1]
                                                    ) * np.cos(self.beta[2]),
                      +self.Lzz(0) * self.Lzz(1) * self.Lzz(2) * np.sin(self.beta[0]) * np.sin(self.beta[1]) * np.sin(self.beta[2])])
        d, c = np.array([self.xxzssParam(squarecospsi, squaresinpsi),
                         self.xzxssParam(squarecospsi, squaresinpsi),
                         self.zxxssParam(squarecospsi, squaresinpsi),
                         self.zzzssParam(squarecospsi, squaresinpsi)]).T
        self.pppssd = sum(a * d)
        self.pppssc = sum(a * d * c) / sum(a * d)
        return np.array([self.pppssd, self.pppssc])

    def sspasParam(self, squarecospsi, squaresinpsi):
        self.sspasd = self.Lyy(0) * self.Lyy(1) * self.Lzz(2) * np.sin(
            self.beta[2]) * self.yyzasParam(squarecospsi, squaresinpsi)[0]
        self.sspasc = self.yyzasParam(squarecospsi, squaresinpsi)[1]
        return np.array([self.sspasd, self.sspasc])

    def spsasParam(self, squarecospsi, squaresinpsi):
        self.spsasd = self.Lyy(0) * self.Lzz(1) * self.Lyy(2) * np.sin(
            self.beta[1]) * self.yzyasParam(squarecospsi, squaresinpsi)[0]
        self.spsasc = self.yzyasParam(squarecospsi, squaresinpsi)[1]
        return np.array([self.spsasd, self.spsasc])

    def pssasParam(self, squarecospsi, squaresinpsi):
        self.pssasd = self.Lzz(0) * self.Lyy(1) * self.Lyy(2) * np.sin(
            self.beta[0]) * self.zyyasParam(squarecospsi, squaresinpsi)[0]
        self.pssasc = self.zyyasParam(squarecospsi, squaresinpsi)[1]
        return np.array([self.pssasd, self.pssasc])

    def pppasParam(self, squarecospsi, squaresinpsi):
        a = np.array([-self.Lxx(0) * self.Lxx(1) * self.Lzz(2) * np.cos(self.beta[0]) * np.cos(self.beta[1]) * np.sin(self.beta[2]),
                      -self.Lxx(0) * self.Lzz(1) * self.Lxx(2) *
                      np.cos(self.beta[0]) * np.sin(self.beta[1]
                                                    ) * np.cos(self.beta[2]),
                      +self.Lzz(0) * self.Lxx(1) * self.Lxx(2) *
                      np.sin(self.beta[0]) * np.cos(self.beta[1]
                                                    ) * np.cos(self.beta[2]),
                      +self.Lzz(0) * self.Lzz(1) * self.Lzz(2) * np.sin(self.beta[0]) * np.sin(self.beta[1]) * np.sin(self.beta[2])])
        d, c = np.array([self.xxzasParam(squarecospsi, squaresinpsi),
                         self.xzxasParam(squarecospsi, squaresinpsi),
                         self.zxxasParam(squarecospsi, squaresinpsi),
                         self.zzzasParam(squarecospsi, squaresinpsi)]).T
        self.pppasd = sum(a * d)
        self.pppasc = sum(a * d * c) / sum(a * d)
        return np.array([self.pppasd, self.pppasc])

    def sspss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.sspssParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def spsss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.spsssParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def pssss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.pssssParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def pppss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.pppssParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def sspas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.sspasParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def spsas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.spsasParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def pssas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.pssasParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def pppas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.pppasParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def chi(self, theta_w=[0], theta_lower=[0], theta_upper=[np.pi], theta_n=[2000], theta_a=[1], theta=[0], psi_w=[np.pi * 2], psi_lower=[0], psi_upper=[np.pi * 2], psi_n=[4000], psi_a=[1], psi=[0]):
        costheta = Expection((lambda x: np.cos(x)), self.theta_distribution,
                             theta_w, theta_lower, theta_upper, theta_n, theta_a, theta)
        cubecostheta = Expection((lambda x: np.cos(x) ** 3), self.theta_distribution,
                                 theta_w, theta_lower, theta_upper, theta_n, theta_a, theta)
        squarecospsi = Expection((lambda x: np.cos(
            x) ** 2), self.psi_distribution, psi_w, psi_lower, psi_upper, psi_n, psi_a, psi)
        squaresinpsi = Expection((lambda x: np.sin(
            x) ** 2), self.psi_distribution, psi_w, psi_lower, psi_upper, psi_n, psi_a, psi)
        return {"sspss": self.sspss(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "spsss": self.spsss(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "pssss": self.pssss(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "pppss": self.pppss(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "sspas": self.sspas(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "spsas": self.spsas(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "pssas": self.pssas(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "pppas": self.pppas(costheta, cubecostheta, squarecospsi, squaresinpsi)}

    # def chieffss(self, omega, costheta, w=[0], costheta_disfunc=None, psi=[0], psi_w=[0], psi_disfunc=uniform):
    #     return np.sin(omega[0]) * np.sin(omega[1]) * np.cos(omega[2]) * self.sspss(costheta, cubecostheta, squarecospsi, squaresinpsi) \
    #          + np.sin(omega[0]) * np.cos(omega[1]) * np.sin(omega[2]) * self.spsss(costheta, cubecostheta, squarecospsi, squaresinpsi) \
    #          + np.cos(omega[0]) * np.sin(omega[1]) * np.sin(omega[2]) * self.pssss(costheta, cubecostheta, squarecospsi, squaresinpsi) \
    #          + np.cos(omega[0]) * np.cos(omega[1]) * np.cos(omega[2]) * self.pppss(costheta, cubecostheta, squarecospsi, squaresinpsi)

    # def chieffas(self, omega, costheta, w=[0], costheta_disfunc=None, psi=[0], psi_w=[0], psi_disfunc=uniform):
    #     return np.sin(omega[0]) * np.sin(omega[1]) * np.cos(omega[2]) * self.sspas(costheta, cubecostheta, squarecospsi, squaresinpsi) \
    #          + np.sin(omega[0]) * np.cos(omega[1]) * np.sin(omega[2]) * self.spsas(costheta, cubecostheta, squarecospsi, squaresinpsi) \
    #          + np.cos(omega[0]) * np.sin(omega[1]) * np.sin(omega[2]) * self.pssas(costheta, cubecostheta, squarecospsi, squaresinpsi) \
    #          + np.cos(omega[0]) * np.cos(omega[1]) * np.cos(omega[2]) * self.pppas(costheta, cubecostheta, squarecospsi, squaresinpsi)


class SHG:
    def __init__(self, beta, n1, n2, theta_distribution=['delta'], psi_distribution=['uniform']) -> None:
        self.beta = beta
        self.n1 = n1
        self.n2 = n2
        self.n_ = list(map(lambda n1, n2: np.sqrt(
            (n1 ** 2 + n2 ** 2 + 4) / (2 * (n1 ** -2 + n2 ** -2 + 1))), self.n1, self.n2))
        self.gamma = list(map(lambda n1, n2: np.arcsin(
            np.sin(self.beta) * n1 / n2), self.n1, self.n2))
        self.theta_distribution = np.array(
            list(map((lambda x: distribution[x]), theta_distribution)))
        self.psi_distribution = np.array(
            list(map((lambda x: distribution[x]), psi_distribution)))

    def Lxx(self, i):
        return 2 * self.n1[i] * np.cos(self.gamma[i]) / (self.n1[i] * np.cos(self.gamma[i]) + self.n2[i] * np.cos(self.beta))

    def Lyy(self, i):
        return 2 * self.n1[i] * np.cos(self.beta) / (self.n1[i] * np.cos(self.beta) + self.n2[i] * np.cos(self.gamma[i]))

    def Lzz(self, i):
        return 2 * self.n2[i] * np.cos(self.beta) / (self.n1[i] * np.cos(self.gamma[i]) + self.n2[i] * np.cos(self.beta)) * ((self.n1[i] / self.n_[i]) ** 2)

    def spssParam(self, squarecospsi, squaresinpsi):
        self.spssd = self.Lyy(0) * (self.Lyy(1) ** 2) * np.sin(self.beta) * \
            self.zyyssParam(squarecospsi, squaresinpsi)[0]
        self.spssc = self.zyyssParam(squarecospsi, squaresinpsi)[1]
        return np.array([self.spssd, self.spssc])

    def msssParam(self, squarecospsi, squaresinpsi):
        self.msssd = self.Lyy(0) * self.Lzz(1) * self.Lyy(1) * \
            np.sin(self.beta) * self.yzyssParam(squarecospsi, squaresinpsi)[0]
        self.msssc = self.yzyssParam(squarecospsi, squaresinpsi)[1]
        return np.array([self.msssd, self.msssc])

    def ppssParam(self, squarecospsi, squaresinpsi):
        a = np.array([+ self.Lzz(0) * (self.Lxx(1) ** 2) * np.sin(self.beta) * (np.cos(self.beta) ** 2),
                      - 2 * self.Lxx(0) * self.Lzz(1) * self.Lxx(1) * np.sin(self.beta) * (np.cos(self.beta) ** 2),
                      + self.Lzz(0) * (self.Lzz(1) ** 2) * (np.sin(self.beta) ** 3)])
        d, c = np.array([self.zxxssParam(squarecospsi, squaresinpsi),
                         self.xzxssParam(squarecospsi, squaresinpsi),
                         self.zzzssParam(squarecospsi, squaresinpsi)]).T
        self.ppssd = d.dot(a)
        self.ppssc = (d * c).dot(a) / d.dot(a)
        return np.array([self.ppssd, self.ppssc])

    def spasParam(self, squarecospsi, squaresinpsi):
        self.spasd = self.Lyy(0) * (self.Lyy(1) ** 2) * np.sin(self.beta) * \
            self.zyyasParam(squarecospsi, squaresinpsi)[0]
        self.spasc = self.zyyasParam(squarecospsi, squaresinpsi)[1]
        return np.array([self.spasd, self.spasc])

    def msasParam(self, squarecospsi, squaresinpsi):
        self.msasd = self.Lyy(0) * self.Lzz(1) * self.Lyy(1) * \
            np.sin(self.beta) * self.yzyasParam(squarecospsi, squaresinpsi)[0]
        self.msasc = self.yzyasParam(squarecospsi, squaresinpsi)[1]
        return np.array([self.msasd, self.msasc])

    def ppasParam(self, squarecospsi, squaresinpsi):
        a = np.array([+ self.Lzz(0) * (self.Lxx(1) ** 2) * np.sin(self.beta) * (np.cos(self.beta) ** 2),
                      - 2 * self.Lxx(0) * self.Lzz(1) * self.Lxx(1) * np.sin(self.beta) * (np.cos(self.beta) ** 2),
                      + self.Lzz(0) * (self.Lzz(1) ** 2) * (np.sin(self.beta) ** 3)])
        d, c = np.array([self.zxxasParam(squarecospsi, squaresinpsi),
                         self.xzxasParam(squarecospsi, squaresinpsi),
                         self.zzzasParam(squarecospsi, squaresinpsi)]).T
        self.ppasd = d.dot(a)
        self.ppasc = (d * c).dot(a) / d.dot(a)
        return np.array([self.ppasd, self.ppasc])

    def spss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.spssParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def msss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.msssParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def ppss(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.ppssParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def spas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.spasParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def msas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.msasParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def ppas(self, costheta, cubecostheta, squarecospsi, squaresinpsi):
        d, c = self.ppasParam(squarecospsi, squaresinpsi)
        return d * (costheta - c * cubecostheta)

    def SHGchi(self, theta_w=[0], theta_lower=[0], theta_upper=[np.pi], theta_n=[2000], theta_a=[1], theta=[0], psi_w=[np.pi * 2], psi_lower=[0], psi_upper=[np.pi * 2], psi_n=[4000], psi_a=[1], psi=[0]):
        costheta = Expection((lambda x: np.cos(x)), self.theta_distribution,
                             theta_w, theta_lower, theta_upper, theta_n, theta_a, theta)
        cubecostheta = Expection((lambda x: np.cos(x) ** 3), self.theta_distribution,
                                 theta_w, theta_lower, theta_upper, theta_n, theta_a, theta)
        squarecospsi = Expection((lambda x: np.cos(
            x) ** 2), self.psi_distribution, psi_w, psi_lower, psi_upper, psi_n, psi_a, psi)
        squaresinpsi = Expection((lambda x: np.sin(
            x) ** 2), self.psi_distribution, psi_w, psi_lower, psi_upper, psi_n, psi_a, psi)
        return {"spss": self.spss(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "msss": self.msss(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "ppss": self.ppss(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "spas": self.spas(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "msas": self.msas(costheta, cubecostheta, squarecospsi, squaresinpsi),
                "ppas": self.ppas(costheta, cubecostheta, squarecospsi, squaresinpsi)}

    # def chieff(self, theta_w=[0], theta_lower=[0], theta_upper=[np.pi], theta_n=[2000], theta_a=[1], theta=[0], psi_w=[np.pi * 2], psi_lower=[0], psi_upper=[np.pi * 2], psi_n=[4000], psi_a=[1], psi=[0]):
    #     pass


class Cinfv(SFG):
    def __init__(self, type, lamda, beta, n1, n2, r, theta_distribution=['delta'], psi_distribution=['uniform']) -> None:
        super(Cinfv, self).__init__(lamda, beta, n1, n2, theta_distribution, psi_distribution)
        self.r = r

    def xxzssParam(self, squarecospsi, squaresinpsi):
        return np.array([(1 + self.r) / 2, (1 - self.r) / 2])

    def yyzssParam(self, squarecospsi, squaresinpsi):
        return self.xxzssParam(squarecospsi, squaresinpsi)

    def xzxssParam(self, squarecospsi, squaresinpsi):
        return np.array([(1 - self.r) / 2, (1 - self.r) / 2])

    def zxxssParam(self, squarecospsi, squaresinpsi):
        return self.xzxssParam(squarecospsi, squaresinpsi)

    def yzyssParam(self, squarecospsi, squaresinpsi):
        return self.xzxssParam(squarecospsi, squaresinpsi)

    def zyyssParam(self, squarecospsi, squaresinpsi):
        return self.xzxssParam(squarecospsi, squaresinpsi)

    def zzzssParam(self, squarecospsi, squaresinpsi):
        return np.array([self.r, self.r - 1])

    def xxzasParam(self, squarecospsi, squaresinpsi):
        return np.array([0, 0])

    def yyzasParam(self, squarecospsi, squaresinpsi):
        return self.xxzasParam(squarecospsi, squaresinpsi)

    def xzxasParam(self, squarecospsi, squaresinpsi):
        return np.array([0, 0])

    def zxxasParam(self, squarecospsi, squaresinpsi):
        return self.xzxasParam(squarecospsi, squaresinpsi)

    def yzyasParam(self, squarecospsi, squaresinpsi):
        return self.xzxasParam(squarecospsi, squaresinpsi)

    def zyyasParam(self, squarecospsi, squaresinpsi):
        return self.xzxasParam(squarecospsi, squaresinpsi)

    def zzzasParam(self, squarecospsi, squaresinpsi):
        return np.array([0, 0])


class C2v(SFG):
    def __init__(self, type, lamda, beta, n1, n2, r, tau, theta_distribution=['delta'], psi_distribution=['uniform']) -> None:
        super(C2v, self).__init__(lamda, beta, n1, n2, theta_distribution, psi_distribution)
        self.r = r
        self.tau = tau
        self.Ra = (1 + self.r - (1 - self.r) * np.cos(self.tau)) / \
            (1 + self.r + (1 - self.r) * np.cos(self.tau))
        self.Rb = 2 * self.r / (1 + self.r + (1 - self.r) * np.cos(self.tau))

    def xxzssParam(self, squarecospsi, squaresinpsi):
        return np.array([(self.Ra * squarecospsi + self.Rb * squaresinpsi + 1) / 2,
                        -(self.Ra * squaresinpsi + self.Rb * squarecospsi - 1) / 2])

    def yyzssParam(self, squarecospsi, squaresinpsi):
        return self.xxzssParam(squarecospsi, squaresinpsi)

    def xzxssParam(self, squarecospsi, squaresinpsi):
        return np.array([- (self.Ra * squaresinpsi + self.Rb * squarecospsi - 1) / 2, - (self.Ra * squaresinpsi + self.Rb * squarecospsi - 1) / 2])

    def zxxssParam(self, squarecospsi, squaresinpsi):
        return self.xzxssParam(squarecospsi, squaresinpsi)

    def yzyssParam(self, squarecospsi, squaresinpsi):
        return self.xzxssParam(squarecospsi, squaresinpsi)

    def zyyssParam(self, squarecospsi, squaresinpsi):
        return self.xzxssParam(squarecospsi, squaresinpsi)

    def zzzssParam(self, squarecospsi, squaresinpsi):
        return np.array([(self.Ra * squaresinpsi + self.Rb * squarecospsi),
                         (self.Ra * squaresinpsi + self.Rb * squarecospsi - 1)])

    def xxzasParam(self, squarecospsi, squaresinpsi):
        return np.array([- squaresinpsi, - squaresinpsi])

    def yyzasParam(self, squarecospsi, squaresinpsi):
        return self.xxzasParam(squarecospsi, squaresinpsi)

    def xzxasParam(self, squarecospsi, squaresinpsi):
        return np.array([(squarecospsi - squaresinpsi) / 2, - squaresinpsi])

    def zxxasParam(self, squarecospsi, squaresinpsi):
        return self.xzxasParam(squarecospsi, squaresinpsi)

    def yzyasParam(self, squarecospsi, squaresinpsi):
        return self.xzxasParam(squarecospsi, squaresinpsi)

    def zyyasParam(self, squarecospsi, squaresinpsi):
        return self.xzxasParam(squarecospsi, squaresinpsi)

    def zzzasParam(self, squarecospsi, squaresinpsi):
        return np.array([2 * squaresinpsi, 2 * squaresinpsi])


class C3v(SFG):
    def __init__(self, type, lamda, beta, n1, n2, R=0, theta_distribution=['delta'], psi_distribution=['uniform']) -> None:
        super(C3v, self).__init__(lamda, beta, n1, n2, theta_distribution, psi_distribution)
        self.R = R

    def xxzssParam(self, squarecospsi, squaresinpsi):
        return np.array([(1 + self.R) / 2, (1 - self.R) / 2])

    def yyzssParam(self, squarecospsi, squaresinpsi):
        return self.xxzssParam(squarecospsi, squaresinpsi)

    def xzxssParam(self, squarecospsi, squaresinpsi):
        return np.array([(1 - self.R) / 2, (1 - self.R) / 2])

    def zxxssParam(self, squarecospsi, squaresinpsi):
        return self.xzxssParam(squarecospsi, squaresinpsi)

    def yzyssParam(self, squarecospsi, squaresinpsi):
        return self.xzxssParam(squarecospsi, squaresinpsi)

    def zyyssParam(self, squarecospsi, squaresinpsi):
        return self.xzxssParam(squarecospsi, squaresinpsi)

    def zzzssParam(self, squarecospsi, squaresinpsi):
        return np.array([self.R, - (1 - self.R)])

    def xxzasParam(self, squarecospsi, squaresinpsi):
        return np.array([-1.0, 1.0])

    def yyzasParam(self, squarecospsi, squaresinpsi):
        return np.array([-1.0, 1.0])

    def xzxasParam(self, squarecospsi, squaresinpsi):
        return np.array([-1e-100, 1e100])

    def zxxasParam(self, squarecospsi, squaresinpsi):
        return np.array([-1e-100, 1e100])

    def yzyasParam(self, squarecospsi, squaresinpsi):
        return np.array([-1e-100, 1e100])

    def zyyasParam(self, squarecospsi, squaresinpsi):
        return np.array([-1e-100, 1e100])

    def zzzasParam(self, squarecospsi, squaresinpsi):
        return np.array([2, 1])
