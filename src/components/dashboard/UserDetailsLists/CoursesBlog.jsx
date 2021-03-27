import React from "react";
import blogDetails from "../VisualDetails/blogDetails.json";

const CoursesBlog = ()=>{
	const totalBlogsInfo = blogDetails.blogDetails;

	return (
		<div className="courses-blog">
			<div className="courses-blog-header">
				<ul className="courses-blog-header-items">
					<li className="courses-blog-icon">
						<i className="fas fa-dollar-sign"/>
					</li>
					<li><span>How to sell courses blog</span></li>
					<li>
						<span className="see-all">see all</span>
					</li>
				</ul>
			</div>
			<div className="courses-blog-footer">
				<ul className="selling-advices">
					{
						totalBlogsInfo.map((blog)=>{
							return (
								<li className="advice row">
									<span className="col m8 advice-text">
										<i className="far fa-square"/> {blog.info}
									</span>
									<span className="col m1"/>
									<span className="col m3 advice-date grey-text">
										<i>{blog.date} days ago</i>
									</span>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	);
};

export default CoursesBlog;