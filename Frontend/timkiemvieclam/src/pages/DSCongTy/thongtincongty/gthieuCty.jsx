const GioiThieuCongTy = ({
    company
}) => {
    if (!company) return null;

    return(
        <>
            <div className="gioithieucongty">
                <div className="bentronggioithieu">
                    <div className="tieudeGt">
                        <span>Giới thiệu công ty</span>
                    </div>
                    <div className="noidungGt">
                        <pre>
                            {company.description}
                        </pre>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GioiThieuCongTy;