const testFunction = async () => {
	let response = await fetch("https://www.spacetechexpo.com/rest/exhibman.php?expos=%27a1x4V000001Ye1A%27");
	return response.data;
};
export default testFunction;
