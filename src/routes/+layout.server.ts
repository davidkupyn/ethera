export async function load({ locals }) {
	const session = await locals.auth.validate();

	return {
		user_email: session?.user.email
	};
}
