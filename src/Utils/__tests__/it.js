import testFunction from "../test2";
//import fetch from "node-fetch";

test("Jest test", () => {
	let testArray = [1, 3, 4, 5];
	const name = window.location.host;
	expect(true).toBe(true);
});

test("async test", () => {
	return testFunction().then(data => {
		console.log("ASYNC ", data);
        expect(true).toBe(true);
	});
});
