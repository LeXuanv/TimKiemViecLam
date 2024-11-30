

const JobSave = () => {
    return(
        <>
        <div className="all-detail">
            <div className="full-box-cv">
            {/* {jobs.length > 0 ? (
                jobs.map((job) => (
                <Link key={job.id} to={PATH_PAGE.chitietcongviec.replace(':id', job.id)} className="link-deital"> */}

                    <div className="box-cv">
                        <div className="box">
                            <div className="img">
                            <img src="https://my.archdaily.net/users/custom_avatars/007/454/945/original/ho.jpg?1675400346" alt="fasfasdf" />
                            </div>
                            <div className="infoCty">
                            <div className="tenViec">
                                <span>fasfasdf</span>
                            </div>
                            <div className="tenCty">
                                <span>Công ty</span>
                            </div>
                            <div className="tt-ct">
                                <div className="luong">
                                <span>10000000</span>
                                </div>
                                <div className="diadiem">
                                <span>Ha noi</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                {/* </Link>
                ))
            ) : (
                <p>Không có công việc nào được tìm thấy.</p>
            )} */}
            </div>
        </div>
        </>
    )
}

export default JobSave;