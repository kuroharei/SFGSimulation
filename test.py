from model import *


if __name__ == "__main__":
    betadeg = np.arange(0, 90, 0.1)
    beta = np.pi * betadeg / 180
    D = 1 / (np.cos(np.pi * 33 / 180) ** 2)
    xzx = yzy = 1
    zxx = zyy = 0.242 * xzx
    zzz = 2.529 * xzx
    n1 = 1
    n2 = 1.33
    gamma = np.arcsin(np.sin(beta) * n1 / n2)
    n_ = np.sqrt((n1 ** 2 + n2 ** 2 + 4) / (2 * (n1 ** -2 + n2 ** -2 + 1)))
    Lxx = 2 * n1 * np.cos(gamma) / (n1 * np.cos(gamma) + n2 * np.cos(beta))
    Lyy = 2 * n1 * np.cos(beta) / (n1 * np.cos(beta) + n2 * np.cos(gamma))
    Lzz = 2 * n2 * np.cos(beta) / (n1 * np.cos(gamma) +
                                   n2 * np.cos(beta)) * ((n1 / n_) ** 2)
    sp = Lzz * (Lyy ** 2) * np.sin(beta) * zyy
    ms = Lyy * Lzz * Lyy * np.sin(beta) * yzy
    pp = Lzz * (Lxx ** 2) * np.sin(beta) * (np.cos(beta) ** 2) * zxx \
        - 2 * Lxx * Lzz * Lxx * np.sin(beta) * (np.cos(beta) ** 2) * xzx \
        + Lzz * (Lzz ** 2) * np.sin(beta) ** 3 * zzz

    plt.plot(betadeg, np.abs(ms) ** 2, color="g", label=r"$45^\degree s$")
    plt.plot(betadeg, np.abs(sp) ** 2, color="r", label=r"$sp$")
    plt.plot(betadeg, np.abs(pp) ** 2, color="b", label=r"$pp$")
    plt.legend()
    plt.show()

    # beta = np.arange(0, 90, 0.1)
    # sample = Cinfv(type="SHG", lamda=800, beta=np.pi * beta / 180,
    #                n1=[1, 1], n2=[1.33, 1.33], r=0.32)
    # chi = sample.SHGchi(theta=[np.pi * 33 / 180])
    # plt.plot(beta, np.abs(chi["spss"]) ** 2, color="r", label=r"$sp$")
    # plt.plot(beta, np.abs(chi["msss"]) ** 2,
    #          color="g", label=r"$45^\degree s$")
    # plt.plot(beta, np.abs(chi["ppss"]) ** 2, color="b", label=r"$pp$")
    # plt.legend()
    # plt.show()
