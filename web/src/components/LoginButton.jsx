import React from 'react';
import {FormGroup, Form,Button,Col,Checkbox,FormControl,ControlLabel} from 'react-bootstrap';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
var facebookData={};
class LoginButton extends React.Component{
	 constructor(props){
   super(props);
   this.state={
	   data:{}
    }
   this.loginWithFB=this.loginWithFB.bind(this);
this.settingState=this.settingState.bind(this);
  }
	
	render(){
		return(
		<div>
				<Button onClick={this.loginWithFB} className="btn btn-primary">Login with Facebook</Button>&nbsp;<br/>
			
				
		</div>
		)
	}
	loginWithFB(){
console.info( Date()+" Connecting to facebook");
window.fbAsyncInit = function() {
FB.init({
appId : '121537301825858',
cookie : true, 
xfbml : true, 
version : 'v2.8' 
});
FB.login(function(response) {
	 console.info(Date()+" Access token generation in progress.");
 cookies.set('AuthResponse', response, { path: '/' });
 console.log(cookies.get('AuthResponse'));
  
        if (response.status === 'connected') {
	 console.info(Date()+" Access token generation successfull.");
        console.info(Date()+' Welcome to Facebook!  Fetching your information.... ');
       FB.api('/me?fields=id,name,email, gender, age_range, first_name,last_name', function(response) {
	   facebookData=response;
	   cookies.set('response', facebookData, { path: '/' });
	   console.log(cookies.get('response'));
	   console.info(Date()+" User Info fetched successfully");
         });
		  
        } else if (response.status === 'not_authorized') {
		   facebookData="The person is logged into Facebook, but not your app.";
		   cookies.set('response', facebookData, { path: '/' });
	   console.error(Date()+" "+cookies.get('response'))
         
        } else {
			console.error(Date()+" Access token geneartion failed");
		  facebookData="Login failed";
		  cookies.set('response', facebookData, { path: '/' });
	      console.error(Date()+" "+cookies.get('response'));
		  setTimeout(function () {
    window.location.reload(1);
}, 10000);
		
        }
	
	


})

};
console.info(Date()+" Loading Facebook Development Kit ");
(
function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_US/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk')); 
		 

}  
settingState(response){
	this.setState({data:response});
}
}
export default LoginButton;