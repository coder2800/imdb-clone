const mongoose = require("mongoose")

const {Schema} = mongoose;

const moviesSchema = new Schema({
    movie_type:{ //The type of entry: movie or series.
        type: String
    },
    movie_title:{ //The title of the entry.
        type: String, 
        unique: true
    },
    movie_starring:{ //A list of actors starring in the movie or series
        type: [String]
    },
    movie_director:{ //The director who directed the movie.
        type: String
    },
    created_at:{ //The date time when the entry was inserted.
        type: Date,
        default: Date.now
    },
    updated_at:{ //The date time when the entry was last updated.
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Movies', moviesSchema);