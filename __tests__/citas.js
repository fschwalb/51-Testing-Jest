import Citas from '../js/classes/Citas';


describe( 'Probar la clase de Citas', () => {

    const citas = new Citas();

    const id = Date.now();

    test( 'Agregar una nueva Cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Fernando',
            telefono: '1654321',
            fecha: '10-12-2021',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }

        citas.agregarCita( citaObj );

        // Test
        expect( citas ).toMatchSnapshot();
    });

    test( 'Actualizar Cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Rambo',
            propietario: 'Fernando',
            telefono: '6684414',
            fecha: '15-1-2021',
            hora:'13:40',
            sintomas: 'Solo come'
        };

        citas.editarCita( citaActualizada );

        expect( citas ).toMatchSnapshot();
    });

    test( 'Eliminar Cita', () => {
        citas.eliminarCita( id );

        expect( citas ).toMatchSnapshot();
    });
});