const GioiThieuCongTyAd = (dataUser) => {
    console.log("datauser in gthieu", dataUser.dataUser.email);
    return(
        <>
            <div className="gioithieucongtyAd">
                <div className="bentronggioithieu">
                    <div className="tieudeGt">
                        <span>Giới thiệu công ty</span>
                    </div>
                    <div className="noidungGt">
                        <p>
                           {dataUser.dataUser.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GioiThieuCongTyAd;