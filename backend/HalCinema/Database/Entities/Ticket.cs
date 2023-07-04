using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Database.Entities;

// 論理削除せずに物理削除する、今後変更履歴を表示したいという要件が出た時にキャンセル履歴テーブルを作る
[Index(nameof(ScheduleId), nameof(SeatId), IsUnique = true)]
public class Ticket
{
    [Key]
    public int Id { set; get; }
    public int ReserveId { set; get; }
    public int SeatId { set; get; }
    public int ScheduleId { set; get; }

    [ForeignKey(nameof(SeatId))]
    public Seat? Seat { set; get; }

    [ForeignKey(nameof(ReserveId))]
    public Reserve? Reserve { set; get; }
    
    [ForeignKey(nameof(ScheduleId))]
    public Schedule? Schedule { set; get; }
}