package dev.repodoc;
import java.util.*;
public class ScoreEngineTest {
 public static void main(String[] args){
  int cases=0;
  for(var c:Cases.ALL){
   var perfect=ScoreEngine.score(c,new HashSet<>(c.gold()));assert perfect.score()==100;
   assert perfect.precision()==1&&perfect.recall()==1&&perfect.f1()==1&&perfect.severityCoverage()==1;
   var all=new HashSet<String>();for(var o:c.options())all.add(o.id());
   var noisy=ScoreEngine.score(c,all);assert noisy.precision()<1&&noisy.score()<85;
   var none=ScoreEngine.score(c,Set.of());assert none.score()==0&&none.missed()==c.gold().size();
   var partial=ScoreEngine.score(c,Set.of(c.gold().get(0)));assert partial.precision()==1&&partial.recall()>0;
   cases++;
  }
  var tenant=Cases.byId("tenant-leak");assert tenant.gold().equals(List.of("bola"));
  assert Cases.byId("transfer-race").gold().equals(List.of("atomic"));
  assert Cases.byId("unknown")==null;
  System.out.println("ScoreEngine assertions passed for "+cases+" cases; full, noisy, empty and partial reviews checked");
 }
}
