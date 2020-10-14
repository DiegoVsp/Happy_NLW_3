import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..','..','uploads'),
    // recebe uma requisição, o arquivo e uma função de callback
    filename: (request, file, cb) => {
      const fileName= `${Date.now()}-${file.originalname}`;

      // no callback o primeiro parametro é o erro(nesse caso null) 
      // e o segundo parametro o resultado(que é o fileName)
      cb(null,fileName)
    }
  })
}

// {
	
// 	"name": "Lar das meninas",
// 	"latitude": -21.784786,
// 	"longitude": -48.202760,
// 	"about": "sobre o orfanato",
// 	"instructions": "venha visitar",
// 	"opening_hours": "Das 8h até as 18h",
// 	"open_on_weekends": true
// }