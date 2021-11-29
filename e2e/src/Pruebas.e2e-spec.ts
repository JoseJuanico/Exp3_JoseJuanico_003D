import { browser, by, element} from 'protractor';

describe('Testeo ProMusic', () =>{
	beforeEach(()=>{
		browser.get('/');
	});

	it("Testeo titulo de género Reggaetón correcto, página inicio-user", () =>{
		expect(element(by.css('.tituloCard ion-card-title')).getText()).toContain("Reggaetón")
	});

	it('Testeo descripción de Reggaetón correcto, página inicio-user',()=>{
		expect(element(by.css('.descripcion p')).getText()).toContain('El reggaetón​ es un género musical​ que se deriva del reggae en español que es a su vez un subgénero del dancehall, así como elementos principalmente del hip hop y la música latina. Es un género musical muy popular hasta hoy en día; que ha llegado a alcanzar sus apogeos máximos durante las décadas de 2000 y 2010.')
	});	



});