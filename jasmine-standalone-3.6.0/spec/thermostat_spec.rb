require 'thermostat'

describe Thermostat do
  describe ".instance" do
    context "there is no instance of Thermostat" do
      it "returns a new instance of Thermostat" do
        expect(Thermostat.instance).to be_a Thermostat
      end
    end
  end
end
