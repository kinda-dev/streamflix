class Api::MoviesController < ApplicationController

    def index 
        # if params[:genre_id]
        #     @movies = Movie.joins(:genres).where(genres: {id: params[:genre_id]})
        # else
        @movies = Movie.all
        render :index
    end

    def show
        @movie = Movie.find_by(id: params[:id])
        if @movie
            render :show
        else
            render json: @movie.errors.full_messages, status: 404
        end
    end

end
