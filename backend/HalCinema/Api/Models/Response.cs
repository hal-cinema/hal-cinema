namespace Api.Models;

public record Response(bool Success, string? Message, object? Data);