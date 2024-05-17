// accessing data from te mongoose schema
const movies = require("../schema/movieSchema");

// creating movie Data
const createMovie = async (req, res) => {
  // destructuring
  const { name, summary, img_url } = await req.body;

  const createData = new movies({
    name,
    summary,
    img_url,
  });

  if (!createData) {
    res.send("FAILED TO CREATE DATA");
  }
  // SAVING DATA
  const DataSaved = await createData.save();

  if (!DataSaved) {
    res.status(204).json({ message: "data not saved" });
  }
 
  res.send("CREATED DATA SUCCESSFULLY");
};

// getting all movie data
const getMovieList = async (req, res) => {
  // FINDING DATA
  const findMovieData = await movies.find();
  if(!findMovieData){
    res.status(400).send("DATA NOT FOUND")
  }
  else{
    res.status(200).send(findMovieData);
  }
};

// getting single movie data
const getSingleMovie = async (req, res) => {
  const { id } = req.params;
  const findMovieByid = await movies.findById(id);
  if(!findMovieByid){
    res.send("DATA NOT FOUND")
  }
  else{
    res.send(findMovieByid);
  }
};

// update movie
const updateMovie = async (req, res) => {
  // const {name , summary} = req.body
  const id = req.params;
  const findMovieData = await movies.findByIdAndUpdate(id, req.body, {
    new: true,
  });
   
  res.send(findMovieData);
}; 

// delete movie with id , means specific
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const DelMovieData = await movies.findByIdAndDelete(id);
    if (!DelMovieData) {
      res.status(204).json({ message: "Data not found " });
    }
    res.send("Data deleted");
  } catch (error) {
    res.status(500).json({ message: "internal error" });
  }
};

// delete all data
const deleteMovieList = async (req, res) => {
  const del = await movies.deleteMany();
  if (!del) {
     res.send("Data Is Not Available")
  }
  res.send("deleted successfull");
};


// exporting All fucntios
module.exports = {
  getMovieList,
  getSingleMovie,
  createMovie,
  deleteMovie,
  deleteMovieList,
  updateMovie,
};
