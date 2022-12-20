import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfileSignup(firstName, lastName, fileName) {
	return Promise
	.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
	.then((res) => (
		res.map((j) => ({
			status: j.status,
			value: j.status === 'fulfilled' ? j.value : String(j.reason),
		}))
	));
}
