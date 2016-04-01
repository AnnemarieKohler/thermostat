require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    redirect '/index.html'
  end

  post '/temperature' do
    p params
    session[:temp] = params[:name]
    p session[:temp]
  end

  get '/temperature' do
    if session[:temp]
      session[:temp]
      redirect '/index.html'
    else
      redirect '/index.html'
    end
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
