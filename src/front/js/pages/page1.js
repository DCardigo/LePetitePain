import React, { useContext, useState, useEffect } from "react";

export const Page1 = () => {

	const { actions, store } = useContext(Context);
	const navigate = useNavigate()




	return (
		<div>

			<div id="logo" class="mt-4">
				<p class="bold">1934</p>
				<h2 id="nombre">
					Le Petite Pain
				</h2>
				<p class="bold">PARIS</p>
			</div>


			{/* // <!-- PAGE 1 -- > */}


			<div class="container">
				<div class="row d-flex">
					<div class="col texto-portada">
						<h2 class="text1">Eres dulce</h2>
						<h1 class="placer fw-bolder mb-4">Placer...</h1>
						<p class="col-11">Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies nisi aliquet, nam
							rutrum
							eros taciti
							neque per faucibus accumsan quam quisque tellus, habitasse hac id enim libero dis interdum convallis
							blandit.</p>
					</div>
					<div class="col fotos-portada mt-5">
						<div class="row">
							<div class="col">
								<img class="tarta1"
									src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A73F095D-A41C-4C81-A87D-00F5E4D3D638/Derivates/33FEF576-49A1-47C4-BBB9-BA9ED1B7C5BE.jpg"
									alt="" />
							</div>

						</div>
						<div class="row">
							<div class="col">
								<img class="tarta2"
									src="https://levaduramadre.es/wp-content/uploads/2021/03/958_tarta_chocolate_00.jpg" alt="" />
								<img class="tarta3"
									src="https://hips.hearstapps.com/hmg-prod/images/tarta-zanahoria-elle-gourmet-1676904152.jpg?crop=1.00xw:0.668xh;0,0.320xh&resize=1200:*"
									alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		


		{/* // <!-- PAGE 2 -- > */ }

		<div class="page-2 d-flex">
			<img class="img-pan"
				src="https://es.cravingsjournal.com/wp-content/uploads/2021/04/baguette-de-masa-madre-4.jpg" alt="" />

			<div class="col-6">
				<h1 class="pan text-white">Panadería</h1>
				<h1 class="sobre">Sobre nosotros</h1>
				<p class="text-p2">Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies nisi aliquet, nam
					rutrum
					Lorem ipsum dolor sit amet consectetur adipiscing, elit pellentesque gravida per felis in dui, netus
					himenaeos praesent vel sed. Leo quam metus sociis volutpat dictumst magnis ultricies vitae arcu, lacus
					mus non sollicitudin neque aenean tellus pretium, sed netus ante consequat molestie mollis potenti
					libero. Ornare interdum nec taciti elementum habitasse nisi posuere lobortis ultricies, ante ridiculus
					purus netus nibh sociis sollicitudin mollis enim, facilisis montes molestie risus scelerisque proin
					convallis auctor.

				</p>
			</div>
		</div>

		{/* // <!-- PAGE 3 --> */ }

		<div class="page-3 text-white">
			<div class="row ">
				<div class="col row-1">
					<img src="Referencias/page-3/iconos/caramelo-de-anis.png" alt="" />
					<h2 class="p3-titulo pt-4">Dulces</h2>
					<p class="pt-2">Ornare interdum nec taciti elementum habitasse nisi posuere lobortis ultricies, ante
						ridiculus
						purus netus nibh sociis sollicitudin mollis enim.</p>
				</div>
				<div class="col row-1">
					<img src="Referencias/page-3/iconos/pedazo-de-pastel.png" alt="" />
					<h2 class="p3-titulo pt-4">Pasteles</h2>

					<p class="pt-2">Ornare interdum nec taciti elementum habitasse nisi posuere lobortis ultricies, ante
						ridiculus
						purus netus nibh sociis sollicitudin mollis enim.</p>
				</div>
				<div class="col">
					<img src="Referencias/page-3/iconos/galleta.png" alt="" />
					<h2 class="p3-titulo pt-4">Galletas</h2>
					<p class="pt-2">Ornare interdum nec taciti elementum habitasse nisi posuere lobortis ultricies, ante
						ridiculus
						purus netus nibh sociis sollicitudin mollis enim.</p>
				</div>
			</div>
			<div class="row row-2">
				<div class="col row-1">
					<img src="Referencias/page-3/iconos/pan-de-molde.png" alt="" />
					<h2 class="p3-titulo pt-4">Pan de molde</h2>
					<p class="pt-2">Ornare interdum nec taciti elementum habitasse nisi posuere lobortis ultricies, ante
						ridiculus
						purus netus nibh sociis sollicitudin mollis enim.</p>
				</div>
				<div class="col row-1">
					<img src="Referencias/page-3/iconos/cuerno.png" alt="" />
					<h2 class="p3-titulo pt-4">Croissants</h2>
					<p class="pt-2">Ornare interdum nec taciti elementum habitasse nisi posuere lobortis ultricies, ante
						ridiculus
						purus netus nibh sociis sollicitudin mollis enim.</p>
				</div>
				<div class="col">
					<img src="Referencias/page-3/iconos/piruleta.png" alt="" />
					<h2 class="p3-titulo pt-4">Piruletas</h2>
					<p class="pt-2">Ornare interdum nec taciti elementum habitasse nisi posuere lobortis ultricies, ante
						ridiculus
						purus netus nibh sociis sollicitudin mollis enim.</p>
				</div>
			</div>
		</div>

		{/* // <!-- PAGE 4 --> */ }

		<div class="page-4">
			<div class="col-6">
				<h1 class="p4-vida">La vida es dulce</h1>
				<h1 class="p4-nuestro">Nuestros productos</h1>
			</div>

			<div class="p4-fotos d-flex">

				<div class="col-12 col-md-4">
					<div class="caja1">
						<img class="p4-img" src="Referencias/page-4/4.jpeg" />
					</div>
					<div class="caja2">
						<img class="p4-img" src="Referencias/page-4/5.jpeg" />
					</div>
				</div>
				<div class="col-12 col-md-4">
					<div class="caja3">
						<img class="p4-img" src="Referencias/page-4/1.jpeg" />
					</div>
					<div class="caja4">
						<img class="p4-img" src="Referencias/page-4/2.jpeg" />
					</div>
					<div class="caja5">
						<img class="p4-img" src="Referencias/page-4/3.jpeg" />
					</div>
				</div>
				<div class="col-12 col-md-4">
					<div class="caja6">
						<img class="p4-img" src="Referencias/page-4/6.jpeg" />
					</div>
					<div class="caja7">
						<img class="p4-img" src="Referencias/page-4/7.jpeg" />
					</div>
				</div>
			</div>
		</div>

		{/* // <!-- PAGE 5 --> */ }

		<div class="page-5">
			<img class="page-5-img" src="Referencias/page-5/1.jpg" alt="" />
			<p class="p5-text text-white">¡Te esperamos!</p>
		</div>

		{/* // <!-- PAGE 6 --> */ }

		<div class="page-6 d-flex">
			<h1 class="text-fondo col-3">Le Petite Pain</h1>
			<div class="col-4">
				<h1 class="p6-bien">Bienvenidos</h1>
				<h1 class="p6-contac">Contáctenos</h1>
				<div class="p6-datos">
					<p>nombre</p>
					<p>telefono</p>
					<p>email</p>
				</div>
			</div>
			<div class="col-8">
				<img class="p6-img1" src="Referencias/page-6/1.jpeg" />
				<img class="p6-img2" src="Referencias/page-6/2.jpeg" />

			</div>
		</div>
		</div >
	);
};
