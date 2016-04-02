require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    redirect '/index.html'
  end

  post '/temperature' do
    session[:temp] = params[:name]
  end

  get '/temp' do
    # headers "Access-Control-Allow-Origin" => '*'
    { temp: session[:temp] }.to_json
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
