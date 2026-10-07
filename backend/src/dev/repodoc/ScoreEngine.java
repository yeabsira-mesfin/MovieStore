package dev.repodoc;
import java.util.*;
public final class ScoreEngine {
  private ScoreEngine() {}
  public static Result score(ReviewCase c, Set<String> selected){
    Set<String> gold=new HashSet<>(c.gold());
    Set<String> tp=new HashSet<>(selected);tp.retainAll(gold);
    Set<String> fp=new HashSet<>(selected);fp.removeAll(gold);
    int t=tp.size(),f=fp.size(),miss=gold.size()-t;
    double precision=selected.isEmpty()?0:(double)t/selected.size();
    double recall=gold.isEmpty()?1:(double)t/gold.size();
    double f1=(precision+recall)==0?0:2*precision*recall/(precision+recall);
    double severity=severityCoverage(c,tp);
    int overall=(int)Math.round(100*(0.45*f1+0.35*recall+0.20*severity));
    return new Result(overall,round(precision),round(recall),round(f1),round(severity),t,f,miss);
  }
  private static double severityCoverage(ReviewCase c,Set<String> tp){
    double total=0,hit=0;
    for(var o:c.options()) if(c.gold().contains(o.id())) {double w=weight(o.severity());total+=w;if(tp.contains(o.id()))hit+=w;}
    return total==0?1:hit/total;
  }
  private static int weight(String s){return switch(s){case "critical"->4;case "high"->3;case "medium"->2;default->1;};}
  private static double round(double n){return Math.round(n*1000.0)/1000.0;}
  public record Result(int score,double precision,double recall,double f1,double severityCoverage,int truePositives,int falsePositives,int missed){}
}
