import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa";

const LienHeCongTyAd = ({
    company,


}) => {
    return(
        <>
            <div className="thongtinlienhe">
                <div className="bentronglh">
                    <div className="tieydelh">
                        <span>Thông tin liên hệ</span>
                    </div>
                    <div className="ndthongtin">
                        <div className="box-chitiet">
                            <div className="icon-chitiet">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="ttchitiet">
                                <span>{company.address}
                                    </span>
                            </div>
                            
                        </div>
                        <div className="box-chitiet">
                            <div className="icon-chitiet">
                                <FaHeadphonesAlt />
                            </div>
                            <div className="ttchitiet">
                                <span>{company.phone_number}
                                    </span>
                            </div>
                            
                        </div>
                        <div className="box-chitiet">
                            <div className="icon-chitiet">
                                <FaVoicemail />
                            </div>
                            <div className="ttchitiet">
                                <span>{company.email}
                                    </span>
                            </div>
                            
                        </div>
                        <div className="box-chitiet">
                            <div className="icon-chitiet">
                                <FaMapMarkedAlt />
                            </div>
                            <div className="ttchitiet">
                                <span>Xem bản đồ</span>
                            </div>
                        </div>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.30364681262!2d105.8392960759983!3d21.020532988059585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab901a1d8c4b%3A0x58d95b093939db26!2zODUgUC4gTmd1eeG7hW4gRHUsIE5ndXnhu4VuIER1LCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1729841950239!5m2!1sen!2s" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LienHeCongTyAd;