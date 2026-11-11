let jsonText = '{name: Shivam}';

try {
    let obj = JSON.parse(jsonText);
    console.log(obj);
}
catch (error) {
    console.log("Invalid JSON");
}