export default class searchService {

	_apiBase = 'https://api.github.com/search/repositories?q=';

	getData = async (reposName='', userName='', language='') => {
		if (!reposName && !userName && !language) {
			return null; 
		}

		let url = this._apiBase;

		if (reposName) {
			url = url + reposName.replace(/\s/g, '+');
		}
		
		if (userName) {
			url = url + `+user:${userName}`;
		}

		if (language) {
			url = url + `+language:${language}`;
		}
		const res = await fetch(`${url}&sort=stars&order=desc`);
   
      if (!res.ok) {
         throw new Error(`Произошла ошибка при пропытке загрузить данные с ${url}, статус ответа ${res.status}`);
      }

      return await res.json();
   };
};