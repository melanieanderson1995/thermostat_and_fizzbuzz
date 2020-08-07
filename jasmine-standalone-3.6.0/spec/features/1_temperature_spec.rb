feature "viewing the temperature" do
  it 'is 20 by default' do
    visit('/')
    expect(page.find('#temperature')).to have_content '20'
  end
end
