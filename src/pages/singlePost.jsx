import * as React from 'react';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import Avatar from '../components/atoms/Avatar/Avatar';
import { StyledSectionTitle } from '../components/atoms/SectionTitle/SectionTitle.styles';

const test = 'Dolor';

const SinglePost = () => (
	<AppProviders>
		<Layout>
			<StyledSectionTitle>Category</StyledSectionTitle>
			<p>#tag, #tag, #tag</p>
			<span>Posted on</span> 01.01.2001
			<div>
				<div style={{ position: 'relative' }}>
					<img
						src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						alt="Lorem ipsum"
					/>
					<Avatar url="https://thispersondoesnotexist.com/" />
				</div>
				<div>
					<h3>User</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur. Eget ipsum neque at quam
						nullam mattis consectetur pharetra dolor. Amet mauris ultrices id
						cursus senectus vitae ac ac. Feugiat amet tincidunt nec malesuada
						lobortis nec. Feugiat purus mauris netus scelerisque ut ac sit.
					</p>
				</div>
			</div>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur. Eget ipsum neque at quam
					nullam mattis consectetur pharetra dolor. Amet mauris ultrices id
					cursus senectus vitae ac ac. Feugiat amet tincidunt nec malesuada
					lobortis nec. Feugiat purus mauris netus scelerisque ut ac sit.
				</p>
				<p>
					Eget gravida sed eu sed faucibus molestie gravida turpis. Massa
					molestie venenatis tincidunt ornare. Arcu fames nisl blandit tortor
					purus sapien sit elementum. Pretium ut eu nisl eget. Tempus vel
					pretium nulla ultrices sed neque turpis laoreet. Enim nisi posuere
					elementum sed. Ultricies cras molestie quam quis. Sollicitudin feugiat
					ornare erat tristique sed sodales.
				</p>
				<p>
					Lectus risus diam pellentesque id ut feugiat tincidunt. Integer eu
					amet nulla commodo porttitor. Mattis scelerisque penatibus dui ac in
					diam urna urna. Nulla ullamcorper praesent diam et amet sed. Amet
					tempus non et suspendisse ut. Ipsum pulvinar mattis aenean sagittis
					malesuada. Diam massa placerat commodo aliquam enim sit viverra nibh.
					Erat at eget vestibulum turpis. Viverra molestie suscipit ornare sed
					convallis dui sed amet. Potenti nulla dui leo elit.
				</p>
				<p>
					Ipsum urna tellus placerat ut gravida posuere est in. Rutrum dui quis
					at ipsum sed aliquet. Volutpat fringilla amet consectetur vel accumsan
					et metus. Eros enim odio tortor et ultricies turpis sodales interdum
					accumsan. Non cum volutpat varius lobortis quis. Et bibendum nunc
					aenean amet amet. Consequat ut lacus neque diam viverra egestas leo
					amet metus. Egestas feugiat pellentesque magna viverra enim nunc.
					Malesuada amet hac sollicitudin nullam. Elementum molestie nisl cum
					tellus facilisi scelerisque. Ut urna diam amet nec a a ultrices nibh
					potenti. Aliquet ut nunc interdum eros velit id feugiat amet montes.
				</p>
				<p>
					Eu gravida molestie risus mauris quis nisl magna ac. Consectetur arcu
					id ullamcorper fermentum. Adipiscing libero morbi laoreet vel. At vel
					cum tellus id. Consectetur volutpat mauris auctor ultrices et platea
					id commodo velit. Fusce odio justo auctor ipsum cursus nisi lectus
					volutpat enim. Nunc dui tristique dictumst amet tortor nullam auctor
					tincidunt tellus. Laoreet ac vulputate aliquam amet. Natoque ut id
					tortor tincidunt.
				</p>
				<p>
					Imperdiet in semper pulvinar praesent. Ullamcorper elementum in metus
					senectus ut ut maecenas tortor aliquet. Faucibus gravida sapien
					molestie a. Praesent pharetra dictum eget amet praesent egestas
					facilisi ullamcorper iaculis. Nibh et quisque tristique ornare
					pulvinar mauris nisl quam.
				</p>
				<p>
					Vitae diam vitae ullamcorper maecenas diam egestas. Mi vitae euismod
					ipsum ullamcorper vel. Placerat et integer mattis laoreet sed diam
					volutpat facilisis ullamcorper. Tincidunt non proin volutpat vitae
					sollicitudin enim. Neque tincidunt nunc consectetur orci. Bibendum
					pulvinar non accumsan auctor vel enim in est mauris. Sollicitudin
					blandit tincidunt turpis mi urna metus in a tincidunt. Quis elementum
					tempus lacus lobortis platea sit vitae venenatis. Tempor massa proin
					sed fermentum est. Nibh nibh tincidunt donec consectetur arcu
					vulputate tempor. Adipiscing morbi volutpat consectetur maecenas
					eleifend nunc. Lorem nunc ut non sit nullam non mi sed magna. Tortor a
					nisl lorem facilisi. Leo mattis pulvinar netus sed.
				</p>
				<p>
					Est accumsan maecenas purus ultricies ultrices tellus id. Vitae amet
					urna penatibus pretium amet eu suspendisse id. Pulvinar diam rutrum
					amet eu suscipit. Eros pretium ornare semper in. Feugiat sit sed nulla
					morbi feugiat tortor nulla dui pulvinar. Viverra sed scelerisque
					lacinia tristique. Vel eu sed pretium lectus. Enim sagittis sit augue
					at faucibus sit nunc facilisi fames. Velit hendrerit sed viverra
					mauris. Nullam viverra viverra condimentum posuere cursus. Aliquam
					justo sit elementum quam sagittis. Diam mauris turpis at tristique.
				</p>
				<p>
					In imperdiet sit nisl amet. In morbi imperdiet sed fames pellentesque.
					Elit sem urna massa nisi diam auctor aliquet eget sapien. Urna urna
					massa risus elementum quis malesuada sapien urna auctor. Dolor
					adipiscing egestas tempus integer id risus nulla nam nibh.
				</p>
				<p>
					At vitae dictum semper tincidunt gravida. Facilisis tristique mauris
					arcu nunc vitae. Eu sed velit integer volutpat a netus condimentum
					nisi pharetra. Sit faucibus a augue amet augue urna nunc parturient.
					Volutpat sit commodo egestas nunc. Donec est id lorem netus interdum
					ac neque. Risus convallis sagittis non nunc. Purus tortor adipiscing
					rhoncus condimentum. Donec urna leo luctus nunc quis morbi. Nulla
					vitae erat facilisi et pellentesque turpis id vehicula risus. Ultrices
					risus mauris odio urna. Placerat morbi consequat rhoncus aliquam
					faucibus. In viverra lobortis tellus in laoreet dictum nibh.
				</p>
				<p>
					Ut nunc in eu et mattis malesuada egestas tincidunt hac. Lorem morbi
					turpis egestas sed orci pretium feugiat integer. Semper vel arcu eu
					tristique id nunc ultricies consequat ut. Tempor turpis senectus et eu
					eu venenatis praesent. Egestas sit facilisis nulla eu et. Egestas
					cursus nunc pharetra gravida ornare nibh placerat leo. Elementum
					varius sit at adipiscing. Orci ut id massa maecenas tempus.
					Scelerisque tincidunt cras velit ultricies. Faucibus dui non dui nisl
					aenean tristique facilisis feugiat. Tellus penatibus rhoncus imperdiet
					tristique adipiscing accumsan facilisi. Amet sed vivamus interdum
					vitae amet tristique at sed. Interdum nisi elit blandit in ut morbi.
				</p>
				<p>
					Sed adipiscing eget ac nulla quis lectus. Integer cursus semper
					pulvinar imperdiet. Ullamcorper aliquam tellus turpis a urna. Nisi
					enim arcu felis sodales ultrices enim sed tellus. Malesuada ut nibh at
					sit purus cursus consectetur tempor. Amet elit in porta suspendisse mi
					euismod odio enim et.
				</p>
				<p>
					Posuere orci in ultrices eu elit tortor. Commodo venenatis morbi
					tellus maecenas orci. Nullam aenean ut in ut egestas pulvinar platea.
					Duis consequat metus ut commodo nec cras aliquet. At nulla potenti sed
					etiam tempus. Vitae cursus donec lectus lectus pretium. A duis massa
					turpis est diam. Vitae nulla posuere id eleifend sem. Odio ultrices
					sit faucibus porttitor non. Nunc dui netus facilisi enim elit mi.
				</p>
				<p>
					Accumsan nam sed tortor curabitur est consequat sem. Odio suspendisse
					eget vulputate diam ullamcorper. Nullam id at venenatis mauris duis
					facilisi nisl turpis donec. Egestas at aliquam a scelerisque odio in.
					Hendrerit aliquam arcu neque gravida quam lobortis viverra bibendum
					at. Sed turpis vestibulum ornare amet urna morbi sit sollicitudin
					elit. In diam dignissim praesent mauris at diam lectus elit. Mi sapien
					pellentesque consequat posuere ullamcorper donec aliquam. Lobortis
					odio nec aliquam rhoncus felis auctor non venenatis. Lorem nunc
					pulvinar odio turpis felis quam adipiscing. Cursus tincidunt elementum
					feugiat volutpat et vitae enim felis. Cras risus quis mattis dapibus
					id. Sapien ullamcorper sit tortor pharetra pellentesque sed augue
					bibendum amet.
				</p>
				<p>
					In mauris in lorem non dui tellus ac tincidunt. Nam quis ornare ut
					suscipit sed integer. Consequat senectus leo pharetra urna nunc. Ut
					sed convallis blandit egestas feugiat pellentesque dolor id id.
					Imperdiet viverra et ipsum fermentum arcu eleifend. Nunc interdum
					integer sed rhoncus. Mi in suspendisse eget vitae amet porta imperdiet
					iaculis integer. Eu nullam risus ac adipiscing interdum nisi purus et.
					Vitae commodo tempus nibh ut. Eget gravida vel dui aliquam faucibus
					leo purus. Morbi vitae urna pretium quam duis fames ut dui. Nisi
					convallis aliquet ultrices sed orci magna gravida enim senectus. Nisl
					amet vitae nullam nulla iaculis lectus sed feugiat quisque.
				</p>
			</div>
			<div>
				<p>Previous</p>
				<p>Next</p>
			</div>
		</Layout>
	</AppProviders>
);

export default SinglePost;

export function Head() {
	return <title>{test}</title>;
}
