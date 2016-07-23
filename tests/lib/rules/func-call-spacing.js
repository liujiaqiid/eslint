/**
 * @fileoverview Tests for func-call-spacing rule.
 * @author Matt DuVall <http://www.mattduvall.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/func-call-spacing"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("func-call-spacing", rule, {
    valid: [

        // default ("never")
        "f();",
        "f(a, b);",
        "f.b();",
        "f.b().c();",
        "f()()",
        "(function() {}())",
        "var f = new Foo()",
        "var f = new Foo",
        "f( (0) )",
        "( f )( 0 )",
        "( (f) )( (0) )",
        "( f()() )(0)",
        "(function(){ if (foo) { bar(); } }());",
        "f(0, (1))",
        "describe/**/('foo', function () {});",
        "new (foo())",

        // "never"
        {
            code: "f();",
            options: ["never"]
        },
        {
            code: "f(a, b);",
            options: ["never"]
        },
        {
            code: "f.b();",
            options: ["never"]
        },
        {
            code: "f.b().c();",
            options: ["never"]
        },
        {
            code: "f()()",
            options: ["never"]
        },
        {
            code: "(function() {}())",
            options: ["never"]
        },
        {
            code: "var f = new Foo()",
            options: ["never"]
        },
        {
            code: "var f = new Foo",
            options: ["never"]
        },
        {
            code: "f( (0) )",
            options: ["never"]
        },
        {
            code: "( f )( 0 )",
            options: ["never"]
        },
        {
            code: "( (f) )( (0) )",
            options: ["never"]
        },
        {
            code: "( f()() )(0)",
            options: ["never"]
        },
        {
            code: "(function(){ if (foo) { bar(); } }());",
            options: ["never"]
        },
        {
            code: "f(0, (1))",
            options: ["never"]
        },
        {
            code: "describe/**/('foo', function () {});",
            options: ["never"]
        },
        {
            code: "new (foo())",
            options: ["never"]
        },

        // "always"
        {
            code: "f ();",
            options: ["always"]
        },
        {
            code: "f (a, b);",
            options: ["always"]
        },
        {
            code: "f\n();",
            options: ["always"]
        },
        {
            code: "f.b ();",
            options: ["always"]
        },
        {
            code: "f.b ().c ();",
            options: ["always"]
        },
        {
            code: "f () ()",
            options: ["always"]
        },
        {
            code: "(function() {} ())",
            options: ["always"]
        },
        {
            code: "var f = new Foo ()",
            options: ["always"]
        },
        {
            code: "var f = new Foo",
            options: ["always"]
        },
        {
            code: "f ( (0) )",
            options: ["always"]
        },
        {
            code: "f (0) (1)",
            options: ["always"]
        },
        {
            code: "(f) (0)",
            options: ["always"]
        },
        {
            code: "f ();\n t   ();",
            options: ["always"]
        }
    ],
    invalid: [

        // default ("never")
        {
            code: "f ();",
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f();"
        },
        {
            code: "f (a, b);",
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f(a, b);"
        },
        {
            code: "f\n();",
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f();"
        },
        {
            code: "f.b ();",
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression", column: 3}],
            output: "f.b();"
        },
        {
            code: "f.b().c ();",
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression", column: 7}],
            output: "f.b().c();"
        },
        {
            code: "f() ()",
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f()()"
        },
        {
            code: "(function() {} ())",
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "(function() {}())"
        },
        {
            code: "var f = new Foo ()",
            errors: [{ message: "Unexpected space between function name and paren.", type: "NewExpression"}],
            output: "var f = new Foo()"
        },
        {
            code: "f ( (0) )",
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f( (0) )"
        },
        {
            code: "f(0) (1)",
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f(0)(1)"
        },
        {
            code: "(f) (0)",
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "(f)(0)"
        },
        {
            code: "f ();\n t   ();",
            errors: [
                { message: "Unexpected space between function name and paren.", type: "CallExpression"},
                { message: "Unexpected space between function name and paren.", type: "CallExpression"}
            ],
            output: "f();\n t();"
        },

        // "never"
        {
            code: "f ();",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f();"
        },
        {
            code: "f (a, b);",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f(a, b);"
        },
        {
            code: "f\n();",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f();"
        },
        {
            code: "f.b ();",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression", column: 3}],
            output: "f.b();"
        },
        {
            code: "f.b().c ();",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression", column: 7}],
            output: "f.b().c();"
        },
        {
            code: "f() ()",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f()()"
        },
        {
            code: "(function() {} ())",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "(function() {}())"
        },
        {
            code: "var f = new Foo ()",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "NewExpression"}],
            output: "var f = new Foo()"
        },
        {
            code: "f ( (0) )",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f( (0) )"
        },
        {
            code: "f(0) (1)",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "f(0)(1)"
        },
        {
            code: "(f) (0)",
            options: ["never"],
            errors: [{ message: "Unexpected space between function name and paren.", type: "CallExpression"}],
            output: "(f)(0)"
        },
        {
            code: "f ();\n t   ();",
            options: ["never"],
            errors: [
                { message: "Unexpected space between function name and paren.", type: "CallExpression"},
                { message: "Unexpected space between function name and paren.", type: "CallExpression"}
            ],
            output: "f();\n t();"
        },

        // "always"
        {
            code: "f();",
            options: ["always"],
            errors: [
                { message: "Missing space between function name and paren.", type: "CallExpression"}],
            output: "f ();"
        },
        {
            code: "f(a, b);",
            options: ["always"],
            errors: [{ message: "Missing space between function name and paren.", type: "CallExpression"}],
            output: "f (a, b);"
        },
        {
            code: "f.b();",
            options: ["always"],
            errors: [{ message: "Missing space between function name and paren.", type: "CallExpression", column: 3}],
            output: "f.b ();"
        },
        {
            code: "f.b().c ();",
            options: ["always"],
            errors: [{ message: "Missing space between function name and paren.", type: "CallExpression", column: 3}],
            output: "f.b ().c ();"
        },
        {
            code: "f() ()",
            options: ["always"],
            errors: [{ message: "Missing space between function name and paren.", type: "CallExpression"}],
            output: "f () ()"
        },
        {
            code: "(function() {}())",
            options: ["always"],
            errors: [{ message: "Missing space between function name and paren.", type: "CallExpression"}],
            output: "(function() {} ())"
        },
        {
            code: "var f = new Foo()",
            options: ["always"],
            errors: [{ message: "Missing space between function name and paren.", type: "NewExpression"}],
            output: "var f = new Foo ()"
        },
        {
            code: "f( (0) )",
            options: ["always"],
            errors: [{ message: "Missing space between function name and paren.", type: "CallExpression"}],
            output: "f ( (0) )"
        },
        {
            code: "f(0) (1)",
            options: ["always"],
            errors: [{ message: "Missing space between function name and paren.", type: "CallExpression"}],
            output: "f (0) (1)"
        },
        {
            code: "(f)(0)",
            options: ["always"],
            errors: [{ message: "Missing space between function name and paren.", type: "CallExpression"}],
            output: "(f) (0)"
        },
        {
            code: "f();\n t();",
            options: ["always"],
            errors: [
                { message: "Missing space between function name and paren.", type: "CallExpression"},
                { message: "Missing space between function name and paren.", type: "CallExpression"}
            ],
            output: "f ();\n t ();"
        }
    ]
});
