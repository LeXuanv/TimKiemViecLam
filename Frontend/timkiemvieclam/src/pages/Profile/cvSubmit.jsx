
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../utils/constant";
import axios from 'axios';
import PageCongViec from "../DSCongViec/pageCongViec";
import { useEffect } from "react";

const CvSubmit = ({
    token,
    state,
    dispatch,
}) => {
    const baseURL = axios.defaults.baseURL;
    useEffect(() => {
        const fetchJob = async () => {
            try {
                dispatch({type: "SET_LOADING", payload: true});
                const response = await axios.get(`/user/jobs/applied?page=${state.currentPage}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                dispatch({type: "SET_JOBS", payload: response.data.data});
                dispatch({type: "SET_CURRENT_PAGE", payload: response.data.current_page});
                dispatch({type: "SET_TOTAL_PAGES", payload: response.data.last_page});
                dispatch({type: "SET_LOADING", payload: false});
            } catch (error) {
                console.error("Error fetching job ", error);
                dispatch({type: "SET_LOADING", payload: false});
            }
        };
    
        fetchJob();
    }, [state.currentPage]);
    
      const handlePageChange = (page) => {
        if (page !== state.currentPage && page >= 1 && page <= state.totalPages) {
            dispatch({type: "SET_CURRENT_PAGE", payload: page});
        }
    };
    
    
    
    const { jobs } =state;

    return(
        <>
        <div className="all-detail">
            <div className="full-box-cv">
                {jobs ? (
                    jobs.map((job) => (
                    // <Link key={job.id} to={`${PATH_PAGE.chitietcongviec}/${job.id}`} className="link-deital">
                    <Link key={job.id} to={PATH_PAGE.chitietcongviec.replace(':id', job.id)} className="link-deital">

                        <div className="box-cv">
                        <div className="box">
                            <div className="img">
                            <img src={`${baseURL}/storage/${job.companyLogo}`} />
                            </div>
                            <div className="infoCty">
                            <div className="tenViec">
                                <span>{job.title}</span>
                            </div>
                            <div className="tenCty">
                                <span>{job.companyName}</span>
                            </div>
                            <div className="tt-ct">
                                <div className="luong">
                                <span>{job.salary}</span>
                                </div>
                                <div className="diadiem">
                                <span>{job.provinceName}</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </Link>
                    ))
                    
                ) : (
                    <p>Không có công việc nào được tìm thấy.</p>
                )}
            </div>
            <PageCongViec
                state = {state}
                dispatch = {dispatch}
                handlePageChange={handlePageChange}
            />
        </div>
        </>
    )
}

export default CvSubmit;