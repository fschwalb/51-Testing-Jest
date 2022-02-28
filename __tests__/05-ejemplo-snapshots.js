
const cliente = {
    nombre: 'Fernando',
    balance: 500,
    tipo: 'Premium'
};



describe( 'Testing al Cliente', () => {

    test( 'Es Fernando', () => {
        expect( cliente ).toMatchSnapshot();
    });

});