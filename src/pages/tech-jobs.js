import React from 'react'
import '../layouts/full-stack-dev-go-food.scss'
import axios from 'axios'
import Modal from 'react-modal'

const LEVER_API_URL = 'https://api.lever.co/v0/postings/gojek'
const NURTURE_API = 'https://nurture-api.golabs.io/api/v1'

const customStylesModal = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: '1234',
  },
  content: {
    backgroundColor: 'transparent',
    border: 'none',
    top: '50px',
    maxWidth: '750px',
    margin: '20px auto',
  },
}

const InterestedModal = ({
  isOpen,
  handleIsInterestedSubmit,
  toggleIsInterestedModal,
  isSuccess,
  error,
  isSubmitting,
}) => (
  <Modal
    isOpen={isOpen}
    style={customStylesModal}
    ariaHideApp={false}
    onRequestClose={toggleIsInterestedModal}
  >
    <div className="modal-form-wrapper">
      <div className="clearfix">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleIsInterestedModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {isSuccess ? (
        <div className="success-wrapper">
          Thanks for sharing your details. One of our colleagues will call you
          in 24 hours.
        </div>
      ) : (
        <div>
          <p className="header">
            We know we would get you excited because we certainly are! <br />Tell
            us about you.
          </p>
          <form onSubmit={handleIsInterestedSubmit}>
            <div className="form-group">
              <label htmlFor="UrlInput">
                Can you share your LinkedIn profile url?
              </label>
              <input
                type="url"
                name="linkedin"
                className="form-control"
                id="UrlInput"
                placeholder="linkedin profile"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactInput">
                Can you share your contact number?
              </label>
              <input
                type="text"
                name="contact"
                className="form-control"
                id="contactInput"
                placeholder="Contact number"
                required
              />
            </div>
            {error && <div className="error-wrapper">{error}</div>}
            <button
              type="submit"
              className="btn btn-success"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  </Modal>
)

const NotInterestedModal = ({
  isOpen,
  handleNotInterestedSubmit,
  toggleNotInterestedModal,
  isSuccess,
  isSubmitting,
  error,
}) => (
  <Modal
    isOpen={isOpen}
    style={customStylesModal}
    onRequestClose={toggleNotInterestedModal}
  >
    <div className="modal-form-wrapper">
      <div className="clearfix">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleNotInterestedModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {isSuccess ? (
        <div className="success-wrapper">Thanks for your feedback.</div>
      ) : (
        <div>
          <p className="header">Thank you for letting us know your interest.</p>
          <form onSubmit={handleNotInterestedSubmit}>
            <div className="form-group">
              <label htmlFor="reasonInput"> Can you please tell us why?</label>
              <textarea
                type="text"
                name="reason"
                className="form-control"
                id="reasonInput"
                placeholder="reason"
                required
              />
            </div>
            {error && <div className="error-wrapper">{error}</div>}
            <button
              type="submit"
              className="btn btn-success"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  </Modal>
)

class TechJobs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoadingData: true,
      candidateNotFound: false,
      jobData: null,
      showInterested: false,
      showNotInterested: false,
      isSuccess: false,
      isSubmitting: false,
      error: '',
    }
    this.toggleIsInterestedModal = this.toggleIsInterestedModal.bind(this)
    this.toggleNotInterestedModal = this.toggleNotInterestedModal.bind(this)
    this.handleIsInterestedSubmit = this.handleIsInterestedSubmit.bind(this)
    this.handleNotInterestedSubmit = this.handleNotInterestedSubmit.bind(this)
    this.updateCandidateStatus = this.updateCandidateStatus.bind(this)
  }

  componentDidMount() {
    try {
      const candidateHash = atob(
        window.location.search.replace('?id=', '')
      ).split(':')
      const jobId = candidateHash[1]
      axios
        .get(`${NURTURE_API}/jobs/public/${jobId}`)
        .then(res => {
          const leverJobId = res.data.lever_job_id
          axios.get(`${LEVER_API_URL}/${leverJobId}`).then(response => {
            this.setState({
              jobData: response.data,
              isLoadingData: false,
            })
          })
        })
        .catch(err => {
          this.setState({
            candidateNotFound: true,
            isLoadingData: false,
          })
        })
    } catch (err) {
      this.setState({
        candidateNotFound: true,
        isLoadingData: false,
      })
    }
  }

  toggleIsInterestedModal() {
    this.setState({
      showInterested: !this.state.showInterested,
    })
  }

  toggleNotInterestedModal() {
    this.setState({
      showNotInterested: !this.state.showNotInterested,
    })
  }

  handleIsInterestedSubmit(e) {
    e.preventDefault()
    const candidateData = {
      phone: e.target.contact.value,
      is_interested_to_work: true,
    }
    if (e.target.linkedin.value) {
      candidateData.social_info = {
        linkedin_url: e.target.linkedin.value,
      }
    }
    this.updateCandidateStatus(candidateData)
  }

  handleNotInterestedSubmit(e) {
    e.preventDefault()
    const candidateData = {
      notes: e.target.reason.value,
      is_interested_to_work: false,
    }
    this.updateCandidateStatus(candidateData)
  }

  updateCandidateStatus(candidateData) {
    const candidateHash = atob(
      window.location.search.replace('?id=', '')
    ).split(':')
    const jobId = candidateHash[1]
    const candidateId = candidateHash[0]
    this.setState({
      isSubmitting: true,
    })
    axios
      .patch(
        `${NURTURE_API}/candidates/public/${candidateId}/${jobId}`,
        candidateData
      )
      .then(res => {
        this.setState({
          isSuccess: true,
          isSubmitting: false,
        })
      })
      .catch(err => {
        let errorMessage = err.response.data
          ? err.response.status === 409
            ? `We've already received a submission from you earlier. If you think, it was not you then please send an email to atif.haider@go-jek.com for any questions.`
            : Object.values(err.response.data.errors).join(', ')
          : 'Error submitting your application'
        if (err.response)
          this.setState({
            error: errorMessage,
            isSubmitting: false,
          })
      })
  }

  render() {
    const {
      jobData,
      showInterested,
      showNotInterested,
      isSuccess,
      isLoadingData,
      candidateNotFound,
      error,
      isSubmitting,
    } = this.state

    return (
      <div className="first-section">
        {!isLoadingData ? (
          <div>
            {jobData && (
              <div className="content-wrapper">
                <div className="content job-posting-section">
                  <div className="section-wrapper ">
                    <div className="section job-section">
                      <div className="posting-headline">
                        <h2 className="text-dark">{jobData.text}</h2>
                        <div className="posting-categories">
                          <div className="category-label text-dark">
                            {jobData.categories.location} |
                          </div>
                          <div className="category-label text-dark">
                            {`${jobData.categories.department} - ${
                              jobData.categories.team
                            }`}{' '}
                            |
                          </div>
                          <div className="category-label text-dark">
                            {jobData.categories.commitment}
                          </div>
                        </div>
                      </div>
                      <div className="postings-btn-wrapper">
                        <button
                          className="btn btn-success interested-btn"
                          type="button"
                          onClick={this.toggleIsInterestedModal}
                        >
                          I'm Interested
                        </button>
                        <button
                          className="btn not-interested-btn"
                          type="button"
                          onClick={this.toggleNotInterestedModal}
                        >
                          Not Interested
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="section-wrapper">
                    <div className="section job-section">
                      <div
                        className="text-dark"
                        dangerouslySetInnerHTML={{
                          __html: jobData.description,
                        }}
                      />
                    </div>
                    {jobData.lists.map(list => (
                      <div className="section job-section">
                        <p className="description-heading text-dark">
                          {list.text}
                        </p>
                        <div className="description-font text-dark">
                          <ul
                            className="lists text-dark"
                            dangerouslySetInnerHTML={{ __html: list.content }}
                          />
                        </div>
                      </div>
                    ))}
                    <div
                      className="section job-section text-dark"
                      dangerouslySetInnerHTML={{ __html: jobData.additional }}
                    />
                    <div className="section text-center">
                      <div className="postings-btn-wrapper">
                        <button
                          className="btn btn-success interested-btn"
                          type="button"
                          onClick={this.toggleIsInterestedModal}
                        >
                          I'm Interested
                        </button>
                        <button
                          className="btn not-interested-btn"
                          type="button"
                          onClick={this.toggleNotInterestedModal}
                        >
                          Not Interested
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showNotInterested && (
              <NotInterestedModal
                isOpen={showNotInterested}
                toggleNotInterestedModal={this.toggleNotInterestedModal}
                isSuccess={isSuccess}
                isSubmitting={isSubmitting}
                error={error}
                handleNotInterestedSubmit={this.handleNotInterestedSubmit}
              />
            )}
            {showInterested && (
              <InterestedModal
                isOpen={showInterested}
                isSuccess={isSuccess}
                isSubmitting={isSubmitting}
                error={error}
                toggleIsInterestedModal={this.toggleIsInterestedModal}
                handleIsInterestedSubmit={this.handleIsInterestedSubmit}
              />
            )}
            {candidateNotFound && (
              <img src="../images//404.png" className="img-fluid" />
            )}
          </div>
        ) : (
          <div
            className="d-flex flex-row justify-content-center align-items-center"
            style={{ height: '90vh' }}
          >
            <i className="fa text-green fa-spinner fa-2x fa-spin" />&nbsp;
            <p className="font-xl-l maison-bold mb-0">Loading...</p>
          </div>
        )}
      </div>
    )
  }
}

export default TechJobs
