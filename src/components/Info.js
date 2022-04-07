import my_image from "../images/me.jpg";
function Info() {
  return (
    <div className='info-container'>
      <img className='profile-photo' src={my_image} />
      <p className='name'>Firoozeh Mirzaei</p>
      <p className='profession'>Web Developer</p>
      <p className='website'>firoozehmirzaei.website</p>

      <div className='info-buttons'>
        <button className='btn-email'>
          <i className='fa fa-envelope'></i> Email
        </button>

        <button className='btn-linkedIn'>
          <i class='fab fa-linkedin'></i> linkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
