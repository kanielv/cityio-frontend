<script lang=ts>

    const headshot = ""

    let identifier = "";
    let password = "";
    let isLoading = false;
    let loginChallenge = "";
    let errorMessage = "";
    let loading = true;
    let isSignUpDisabled = true;

    const handleLogin = async () => {

    }
    
</script>    



<main class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img class="w-24 h-24 mb-5 rounded-lg" src={headshot} alt="Prayuj" />
        <a href="" class="flex items-center mb-6 text-3xl font-heavy text-gray-900">
            Sign in with Prayuj Authentication
        </a>
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            {#if errorMessage}
                <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                    <p>{errorMessage}</p>
                </div>
            {/if}
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form class="space-y-4 md:space-y-6" on:submit|preventDefault={handleLogin}>
                    <div>
                        <label for="identifier" class="block mb-2 text-sm font-medium text-gray-900">Username or Email</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            id="identifier"
                            type="identifier"
                            placeholder="example@prayujt.com"
                            bind:value={identifier}
                        />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            id="password"
                            type="password"
                            placeholder="******************"
                            bind:value={password}
                        />
                    </div>
                    <button
                        class="w-full flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        type="submit"
                        disabled={isLoading}
                        style="min-width: 120px;"
                    >
                        {#if isLoading}
                            <span>Signing In...</span>
                            <div class="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {:else}
                            Sign In
                        {/if}
                    </button>
                    <div class="flex items-center justify-center">
                        <a class="text-sm font-medium text-blue-600 hover:font-bold hover:cursor-not-allowed">Forgot password?</a>
                    </div>
                    <p class="text-sm font-light">
                        Don’t have an account?
                        <a class="font-medium text-blue-600 hover:cursor-not-allowed">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</main>