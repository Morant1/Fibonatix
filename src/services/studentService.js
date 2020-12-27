import { storageService } from './storageService'


export const studentService = {
    query,
    getById,
    remove,
    save,
    getPrevNextId,
    getPageData,
    setPageData,
    selectAll
}



const KEY_STUDENTS = 'STUDENTS';
const KEY_PAGE = "PAGE"
let gStudents = storageService.loadFromStorage(KEY_STUDENTS);
let gPageData = storageService.loadFromStorage(KEY_PAGE) || {chosenBtn:0,pageIdx:0}



function query() {
    if (!gStudents || !gStudents.length) {
        gStudents = _createStudents()
        storageService.saveToStorage(KEY_STUDENTS, gStudents);
    }

    return Promise.resolve(gStudents)
}

function getById(studentId) {
    const student = gStudents.find(student => student._id === studentId);
    return Promise.resolve(student);
}

function remove() {
    gStudents = gStudents.filter(student => !student.isSelected)
    storageService.saveToStorage(KEY_STUDENTS,gStudents);
}

function save(currStudent) {
    const idx = gStudents.findIndex(student => student._id === currStudent._id)
    gStudents.splice(idx,1,currStudent);
    storageService.saveToStorage(KEY_STUDENTS,gStudents)

    return Promise.resolve(currStudent);
}


function getPrevNextId(currStudent) {

    const currIdx = gStudents.findIndex(student => student._id === currStudent._id)
    const nextStudent = gStudents[currIdx + 1] || gStudents[0]
    const prevStudent = gStudents[currIdx - 1] || gStudents[gStudents.length - 1]

    return Promise.resolve({
        prevId: prevStudent._id,
        nextId: nextStudent._id
    })
}

function getPageData() {
    return Promise.resolve(gPageData)
}
function setPageData(chosenBtn,pageIdx) {
    gPageData = {chosenBtn,pageIdx};
    storageService.saveToStorage(KEY_PAGE,gPageData)

}

function selectAll(isSelect) {

    gStudents = gStudents.map(student => {
        if (isSelect ? !student.isSelected: student.isSelected ) student.isSelected = !student.isSelected
        return student;
    })
    storageService.saveToStorage(KEY_STUDENTS,gStudents);
}


function _createStudents() {
    return [
        {
            "_id": "79",
            "name": "dandi",
            "email": "dandi@gmail.com",
            "university":"tel aviv university",
            "age": 16,
            "gender": "female",
            "city": "tel aviv",
            "isSelected": false
          },
          {
            "_id": "80",
            "name": "karin",
            "email": "karin@gmail.com",
            "university":"tel aviv university",
            "age": 17,
            "gender": "female",
            "city": "akko",
            "isSelected": false
          },
          {
            "_id": "81",
            "name": "liroy",
            "email": "liroy1@gmail.com",
            "university":"tel aviv university",
            "age": 16,
            "gender": "male",
            "city": "Tel aviv",
            "isSelected": false
          },
          {
            "_id": "82",
            "name": "daniella",
            "email": "daniella12@gmail.com",
            "university":"hebrew university",
            "age": 17,
            "gender": "female",
            "city": "kefar saba",
            "isSelected": false
          },
          {
            "_id": "83",
            "name": "tali",
            "email": "taliii@gmail.com",
            "university":"hebrew university",
            "age": 17,
            "gender": "male",
            "city": "ramat gan",
            "isSelected": false
          },
          {
            "_id": "84",
            "name": "morani",
            "email": "morani8865@gmail.com",
            "university":"tel aviv university",
            "age": 17,
            "gender": "female",
            "city": "akko",
            "isSelected": false
          },
          {
            "_id": "85",
            "name": "mor",
            "email": "mormor@gmail.com",
            "university":"tel aviv university",
            "age": 15,
            "gender": "male",
            "city": "tel aviv",
            "isSelected": false
          },
          {
            "_id": "86",
            "name": "lior",
            "email": "lili@yahoo.com",
            "university":"tel aviv university",
            "age": 16,
            "gender": "male",
            "city": "tel aviv",
            "isSelected": false
          },
          {
            "_id": "87",
            "name": "lea",
            "email": "lea123456@yahoo.com",
            "university":"bar ilan university",
            "age": 17,
            "gender": "female",
            "city": "ramat gan",
            "isSelected": false
          },
          {
            "_id": "88",
            "name": "shani",
            "email": "shani@walla.com",
            "university":"bar ilan university",
            "age": 16,
            "gender": "female",
            "city": "tel aviv",
            "isSelected": false
          },
          {
            "_id": "89",
            "name": "lidor",
            "email": "lidor@walla.com",
            "university":"hebrew university",
            "age": 16,
            "gender": "male",
            "city": "tel aviv",
            "isSelected": false
          },
          {
            "_id": "90",
            "name": "liam",
            "email": "liam@outmail.com",
            "university":"hebrew university",
            "age": 17,
            "gender": "female",
            "city": "tel aviv",
            "isSelected": false
          },
          {
            "_id": "91",
            "name": "ana",
            "email": "anacohen@gmail.com",
            "university":"tel aviv university",
            "age": 15,
            "gender": "female",
            "city": "dimona",
            "isSelected": false
          },
          {
            "_id": "92",
            "name": "or",
            "email": "orcohen@gmail.com",
            "university":"tel aviv university",
            "age": 15,
            "gender": "male",
            "city": "herzliya",
            "isSelected": false
          },
          {
            "_id": "93",
            "name": "lev",
            "email": "lev@gmail.com",
            "university":"bar ilan university",
            "age": 17,
            "gender": "female",
            "city": "herzliya",
            "isSelected": false
          },
          {
            "_id": "94",
            "name": "yotam",
            "email": "yoyo@gmail.com",
            "university":"bar ilan university",
            "age": 17,
            "gender": "male",
            "city": "tel aviv",
            "isSelected": false
          },
          {
            "_id": "95",
            "name": "yoni",
            "email": "yoni1234@gmail.com",
            "university":"tel aviv university",
            "age": 18,
            "gender": "male",
            "city": "bnei brak",
            "isSelected": false
          },
          {
            "_id": "96",
            "name": "yuli",
            "email": "yulim@gmail.com",
            "university":"tel aviv university",
            "age": 17,
            "gender": "female",
            "city": "bnei brak",
            "isSelected": false
          },
          {
            "_id": "97",
            "name": "ortal",
            "email": "ortal@gmail.com",
            "university":"tel aviv university",
            "age": 16,
            "gender": "female",
            "city": "nahariyya",
            "isSelected": false
          },
          {
            "_id": "98",
            "name": "shir",
            "email": "shir@gmail.com",
            "university":"tel aviv university",
            "age": 17,
            "gender": "female",
            "city": "tel aviv",
            "isSelected": false
          }
    ]
}


