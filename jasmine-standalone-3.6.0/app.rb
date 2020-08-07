require 'sinatra/base'
require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base
  enable :sessions

  get '/' do
    File.read('public/index.html') 
  end

  run! if app_file == $0
end
