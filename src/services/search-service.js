export default class searchService {

	data = {}

	getData() {
		return new Promise((resolve, reject) => {
			resolve(this.russianContentState);
			reject(new Error('Something bad happend'));
		});
	};
};