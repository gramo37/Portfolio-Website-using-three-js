import emailjs from '@emailjs/browser';

export const sendEmail = (userDetails) => async (dispatch) => {
    dispatch({
        type: "SEND_MAIL_REQ"
    })

    emailjs.sendForm('service_npzjtpg', 'template_v1582qq', userDetails, 'uF6OeJEqNkVC7B5mC')
        .then((result) => {
            console.log(result.text);
            dispatch({
                type: "SEND_MAIL_SUCCESS",
                payload: result.text
            })
        }, (error) => {
            console.log(error.text);
            dispatch({
                type: "SEND_MAIL_FAIL",
                payload: error.text
            })
        });
}
