package dev.repodoc;
import java.util.stream.Collectors;
public final class Json {
 private Json(){}
 public static String cases(){return "["+Cases.ALL.stream().map(Json::one).collect(Collectors.joining(","))+"]";}
 private static String one(ReviewCase c){return "{\"id\":\""+e(c.id())+"\",\"title\":\""+e(c.title())+"\",\"language\":\""+e(c.language())+"\",\"context\":\""+e(c.context())+"\",\"diff\":\""+e(c.diff())+"\",\"options\":["+c.options().stream().map(o->"{\"id\":\""+e(o.id())+"\",\"label\":\""+e(o.label())+"\",\"severity\":\""+e(o.severity())+"\"}").collect(Collectors.joining(","))+"]}";}
 public static String result(ScoreEngine.Result r){return "{\"score\":"+r.score()+",\"precision\":"+r.precision()+",\"recall\":"+r.recall()+",\"f1\":"+r.f1()+",\"severityCoverage\":"+r.severityCoverage()+",\"truePositives\":"+r.truePositives()+",\"falsePositives\":"+r.falsePositives()+",\"missed\":"+r.missed()+"}";}
 private static String e(String s){return s.replace("\\","\\\\").replace("\"","\\\"").replace("\n","\\n").replace("\r","");}
}
