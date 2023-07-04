namespace Api.Models;

public class SignInRequest
{
    public SignInRequest(string email, string password)
    {
        Email = email;
        Password = password;
    }

    public string Email { set; get; }
    public string Password { set; get; }
    public bool RememberMe { set; get; }
}