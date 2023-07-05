namespace Api.Models;

public class SignUpRequest
{
    public SignUpRequest(string email, string password, string userName)
    {
        Email = email;
        Password = password;
        UserName = userName;
    }

    public string Email { set; get; }
    public string UserName { set; get; }
    public string Password { set; get; }
}