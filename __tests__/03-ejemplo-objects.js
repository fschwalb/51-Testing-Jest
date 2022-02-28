
const cliente = {
    nombre: 'Fernando',
    balance: 500
};

describe( 'Testing al Cliente', () => {
    
   test( 'El cleitne es Premium', () => {
       expect( cliente.balance ).toBeGreaterThan(400);
   });

   test( 'Es Fernando', () => {
       expect( cliente.nombre ).toBe('Fernando');
   });

   test( 'No es otro cliente', () => {
       expect( cliente.nombre ).not.toBe('Pedro');
   });

   test( 'No tiene 500', () => {
       expect( cliente.balance ).not.toBe(400);
   });

});