// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDs8BPwGSTEbKoRvXQYRCD3msOaPwY2-ic',
	authDomain: 'test-dummy-741e2.firebaseapp.com',
	projectId: 'test-dummy-741e2',
	storageBucket: 'test-dummy-741e2.appspot.com',
	messagingSenderId: '962195027961',
	appId: '1:962195027961:web:c3e41496ff36bb25caef28',
	measurementId: 'G-MRS7SFEDX5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
