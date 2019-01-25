import React from "react"
import { Helmet } from "react-helmet";
import Link, { navigateTo } from 'gatsby-link';

import * as PropTypes from "prop-types"

class PostTemplate extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount(){
		console.log("this.prorrr",this.props)
		this.props.history.replace(this.props.location.pathname==='/careers/'?'/careers':this.props.location.pathname)
	}
	
	static propTypes = {
    	data: PropTypes.shape({
      		jobsJson: PropTypes.object.isRequired,
    	}),
	}

	handleClick (evt) {
		navigateTo({
			pathname: '/apply',
			state: {
			  id: this.props.data.jobsJson.id,
			  path: this.props.data.jobsJson.positionSlug,
			  name: this.props.data.jobsJson.position,
			  place:  this.props.data.jobsJson.place,
			  jobId: this.props.data.jobsJson.jobId,
			  referer: this.props.location.state === undefined ? 'https://www.gojek.io/' : this.props.location.state.referer
			},
		  })
	}

	getTabHeading(key) {
		switch(key) {
			case 'responsibilities': 
				return "Responsibilities";
			case 'experience':
				return "EXPERIENCE & SKILLS"
			case 'about':
				return "About you"
			case 'overview':
				return "Overview"
			case 'expectations':
				return "Expectations"
			case 'whatWillYouDo':
				return "What will you do"
			case 'whatWillYouNeed':
				return "What will you need"
			case 'whatWouldbeaBonus':
				return "What would be a bonus"
			case 'projects':
				return "Projects you could work on"
			case 'requirements':
				return "Requirements"
			default:
				return "About";
		}
	}

	render() {
		const jobsJson = this.props.data !== undefined ? this.props.data.jobsJson : '';
		if(jobsJson !== '') {
		return (
			<div>
			<Helmet>
				<title> { jobsJson.title } </title>
				<meta property="og:title" content={ jobsJson.title } />
				<meta name="twitter:title" content={ jobsJson.title } />
				<meta name="description" content={ jobsJson.metaDescription } />
				<meta name="twitter:description" content={ jobsJson.metaDescription } />
				<meta property="og:description" content={ jobsJson.metaDescription } />
			</Helmet>

			<section className="first-section">
				<img className="img-fluid" src="../../images/careers/job-illustration.png" />
			</section>
			<section className="">
				<div className="container py-5">
					<div className="row">
						<div className="col-lg-10 offset-lg-1">
							<h1 className="h2 font-xl text-left text-black raleway-extrabold font-xl text-black mb-1">{jobsJson.position}</h1>
							<div className="text-left">
										<button
									onClick={ this.handleClick}
									target = "_blank"
									className = "text-center btn bg-green text-white raleway-bold text-uppercase my-1 font-md custom-btn"
								>
									APPLY NOW
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 offset-lg-1">
							<ul className="nav nav-tabs" id="myTab" role="tablist">
							{jobsJson.headings.map((heading, key) => {
								return(
									<li className="nav-item" key={key} >
										<a className={"nav-link jd-tab roboto-bold text-uppercase " + (key === 0 ? 'active' : '')} id={`#${heading}-tab`} data-toggle="tab" href={`#${heading}`} role="tab" aria-controls={`${heading}`}
										aria-selected="true">{this.getTabHeading(heading)}</a>
									</li>
								)
							}
							)}
							{
								jobsJson.jobId==='fk0juf6'&&
								<li>
										<a className={"nav-link jd-tab roboto-bold text-uppercase "} 
										id={`#platformSpecificRequirements-tab`} data-toggle="tab" href={`#platformSpecificRequirements`} role="tab" aria-controls={`platformSpecificRequirements`}
										aria-selected="true"> Requirements</a>
								</li>
							}
							
							</ul>
						</div>
					</div>

					<div className="tab-content" id="myTabContent">
						{jobsJson.headings.map((heading, key) => {
							console.log("heading getting",heading)
							return(
								<div key={key} className={"tab-pane fade show " + (key === 0 ? 'active' : '')} id={`${heading}`} role="tabpanel" aria-labelledby={`${heading}-tab`}>
									<section className="roboto-regular">
										<div className="container">
											<div className="row justify-content-center">
												<div className="col-lg-10">
													<div className="row pt-4"> 
													{
														(jobsJson.jobId === 'fk019mp' && heading === 'responsibilities') &&
														<p>{ jobsJson.responsibilitiesOverview }</p>
													}
													{
														(heading !== "overview") &&
														<ul className="text-green" >
															<div className="row" >
																{
																	jobsJson[heading].map((value, key) => {
																	return(
																		<div className="col-md-6 col-sm-12  pr-5" key={key} >
																		{
																			(key===0&&heading === 'requirements'&& (jobsJson.jobId==='fk0j3ij'||jobsJson.jobId==='fk0j3ix'))&&
																			<li className="py-2 font-md">
																				<span className="font-sm text-dark" > Your toolkit:</span>
																				<ul>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Microservices (HTTP &amp; GRPC)</span>
																					</li>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Experience in Golang, Ruby, Clojure, Java (and a willingness to learn others).
																						</span>
																					</li>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Postgresql
																						</span>
																					</li>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Devops: Chef, Ansible, Docker, Kubernetes
																						</span>
																					</li>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Rails, Javascript
																						</span>
																					</li>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Kafka, Spark, Flink
																						</span>
																					</li>
																				</ul>
																			
																			</li>
																		}
																			<li key = {key} className="py-2 font-md" >
																				<span className="font-sm text-dark" > {value}</span>
																			</li>
																			
																			
																		</div>
																	)}
																)}
																
															</div>
														</ul>
														}
														{
															heading === "overview" &&
															<div className="col-12">
																<p className="pl-3  	text-lg-left 
																font-sm">
																	{jobsJson.overview}
																</p>
																<div className="row">
																<div className="col-md-6">
																<p className="pl-3 font-sm  text-lg-left text-center ">{jobsJson.rolesOverview} </p>
																{/* {
																	jobsJson.roles.length > 0 && 
																
																	<ul className=" text-green">
																		{
																			jobsJson.roles.map((role, key) => (
																				<li className="py-2 font-md" key={key}>
																					<span className="font-sm text-dark" > {role} </span>
																				</li>
																			))
																		}
																	</ul>
																} */}
																	</div>
																	<div className="col-md-6">
																<p className="pl-3 font-sm  text-lg-left text-center ">{jobsJson.scopeOverview} </p>
																{/* {
																	jobsJson.scope.lenght > 0 &&
																	<ul className=" text-green">
																		{
																			jobsJson.scope.map((role, key) => (
																				<li className="py-2 font-md" key={key}>
																					<span className="font-sm text-dark" > {role} </span>
																				</li>
																			))
																		}
																	</ul>
																	} */}
																	</div>
																</div>
																</div>
																
														}
														

													</div>
													{
														(jobsJson.jobId !== 'fk019mp' && heading+'Overview' !== "")  &&
														<p className="font-md text-dark">
															{ jobsJson[heading+'Overview'] }
														</p>
													}
												</div>
											</div>
										</div>
									</section>
								</div>

								
							)}
						)}	
						{
							jobsJson.jobId === 'fk0juf6'&&
							<div  className={"tab-pane fade show " } id={`platformSpecificRequirements`} role="tabpanel" aria-labelledby={`platformSpecificRequirements-tab`}>
						<section className="roboto-regular">
							<div className="container">
								<div className="row justify-content-center">
								<div className="col-lg-10">
									<div className="row pt-4"> 
									<p className="pl-4 text-green font-lg mb-0 font-weight-bold">Android</p>
									<ul className="text-green" >
											<div className="row" >
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Passionate about the Android ecosystem and the history and design principles behind it
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Experience with Kotlin and Android SDK
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Good understanding of architecture principles, code organisation and system design
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Deep knowledge of Android UI fundamentals and experience with graphics APIs (Canvas, Paint, PorterDuffModes etc)
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" >Experience in creating custom views 
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Ability to create UIs programatically or via XML
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Ability to write readable, testable, modular code
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Experience with commonly used popular Android libraries is a plus
														</span>
													</li>
												</div>
											</div>
										</ul>

										<p className="pl-4 text-green font-lg mb-0 font-weight-bold">iOS</p>
										<ul className="text-green" >
											<div className="row" >
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Passionate about the iOS/macOS ecosystem and appreciation for the design and programming principles behind them
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" >Good understanding of architecture principles, code organisation and system design
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Experience in Swift programming, Cocoa, Xcode and the iOS SDK
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Deep knowledge of UIKit fundamentals. Bonus if you’ve worked with UIDynamics, SceneKit and QuartzCore
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" >Ability to develop UIs programatically or via XIB
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Ability to write readable, testable, modular code
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" >Experience with commonly used popular iOS libraries is a plus
														</span>
													</li>
													
												</div>
												
											</div>
										</ul>

										<p className="pl-4 text-green font-lg mb-0 font-weight-bold">Web</p>
										<ul className="text-green" >
											<div className="row" >
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Passionate about web frontend
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" >Autodidact capable of learning slow and/or fast
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Strong understanding of foundational web technologies like HTML, CSS and JavaScript
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" >Knowledge of how browsers work is essential
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" >Extremely well versed with the JavaScript language in general along with transpiling tools like Babel, module bundlers like webpack, parcel
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Some experience with React and its ecosystem
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" >Some experience with nodejs &amp; npm
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" >Strong web design skills
														</span>
													</li>
													
												</div>
												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" > Strong documentation skills
														</span>
													</li>
												</div>

												<div className="col-md-6 col-sm-12  pr-5" >
													<li className="py-2 font-md" >
														<span className="font-sm text-dark" >Attention to detail
														</span>
													</li>
												</div>
												
											</div>
										</ul>
									</div>

									
								</div>
									
								</div>
							</div>
						</section>
							</div>
						}												
					</div>
				</div>
			</section>

			<section className="bg-green roboto-regular mt-5">
				<div className="container py-5">
					<h1 className="h2 font-xl  text-center text-white">Think you fit the bill?</h1>
					<div className="text-center ">
										<button
									onClick={ this.handleClick}
									target = "_blank"
									className = " text-center btn bg-white text-green raleway-bold text-uppercase my-1 font-md challenging-button custom-btn"
								>
									APPLY NOW
								</button>
					</div>
				</div>
			</section>
		</div>
	
			);
		} else {
			return(
				<div>here</div>
			);
		}
	}
}

export default PostTemplate

export const pageQuery = graphql`
  query PostPage($positionSlug: String!) {
	# Select the post which equals this slug.
    jobsJson(positionSlug: {eq: $positionSlug }) {
		id
	  	positionSlug
		link
		place
		responsibilities
		position
		jobId
		experience
		headings
		about
		responsibilitiesOverview
		rolesOverview
		scopeOverview
		overview
		expectations
		whatWillYouDo
		whatWillYouNeed
		whatWouldbeaBonus
		requirements,
		projects,
		metaDescription,
		title
		}
	}
`