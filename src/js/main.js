const url = "http://localhost:4000/form_submissions";
const data = {
    name =document.getElementById("name").value,
    email=document.getElementById("email").value,
    phone=document.getElementById("phone").value,
    qestion=document.getElementById("question").value,
};

const jsonData = JSON.stringify(data);

const headers = new Headers();
headers.append("Content-Type", "application/json");

fetch(url, {
    method: "POST",
    headers: headers,
    body: jsonData,
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((responseData) => {
        alert("Submission created successfully:", responseData);
    })
    .catch((error) => {
        alert("Error:", error);
    });
