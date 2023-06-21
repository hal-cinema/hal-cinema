namespace Api.Models;

public record Response(bool Success, string? Message, object? Data);
public record PageableResponse(int? NextPageToken, string? Message, object? Data) : Response(true, Message, Data);