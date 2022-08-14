const _name = document.querySelector("#name")
const  _job = document.querySelector("#job")
const  _age = document.querySelector("#age")
const addUser = document.querySelector("#addUser")
const deleteUser = document.querySelector(".button")
const table = document.getElementsByTagName('tbody')



axios.get("http://localhost:8080/liders" )
.then(res =>  {
    table.innerHTML=" "
    for(lider of res.data){
        table.innerHTML+=`
        <tr>
          <td data-label="Name">${lider.name}</td>
          <td data-label="Age">${lider.age}</td>
          <td data-label="Job">${lider.job}</td>
          <td data-label="Actions">
            <button class="ui icon button">
              <i class="trash icon"></i>
            </button>
          </td>
        </tr>`
    }

})
