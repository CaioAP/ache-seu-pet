import { boot } from 'quasar/wrappers';
import Post from 'src/entities/Post';
import PostGatewayHttp from 'src/gateways/PostGatewayHttp';
import AxiosAdapter from 'src/infra/http/AxiosAdapter';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
	const postGateway = new PostGatewayHttp(
		new AxiosAdapter<Post>(),
		'http://localhost:3000'
	);
	app.provide('postGateway', postGateway);
});
