import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../utils/constant";

const ListCty = () =>{
    return(
        <>
            <div className="full-box-cty">
                <div className="box-cv">
                    <Link to={PATH_PAGE.chitietcongty}>
                        <div className="box">
                            <div className="img">
                                <img src="https://my.archdaily.net/users/custom_avatars/007/454/945/original/ho.jpg?1675400346"/>
                            </div>
                            <div className="infoCty">
                                <div className="tenCty">
                                    <span>Công ty TNHH Gol</span>
                                    <div className="diadiem">
                                        <span>Hà Nội</span>
                                    </div>
                                </div>
                                <div className="gt-cty">
                                    <span>Gol là một doanh nghiệp hàng đầu trong lĩnh vực [ngành nghề hoặc dịch vụ], với sứ mệnh mang lại giải pháp [sản phẩm/dịch vụ] chất lượng cao và tối ưu cho khách hàng. Chúng tôi tự hào sở hữu đội ngũ nhân viên chuyên nghiệp, sáng tạo và tận tâm, luôn cam kết cung cấp những giá trị vượt trội, đáp ứng mọi nhu cầu của thị trường. Với tầm nhìn dài hạn, [Tên Công ty] không ngừng đổi mới và phát triển, nhằm xây dựng một hệ sinh thái bền vững, góp phần vào sự thịnh vượng chung của xã hội.</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ListCty;