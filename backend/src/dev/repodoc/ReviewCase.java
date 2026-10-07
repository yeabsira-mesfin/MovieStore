package dev.repodoc;
import java.util.List;
public record ReviewCase(String id,String title,String language,String context,String diff,List<Option> options,List<String> gold) {
  public record Option(String id,String label,String severity) {}
}
